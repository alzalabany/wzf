import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import api from "./api";
import BookReducer, { leaf as Bookleaf } from "./book";
import AuthorReducer, { leaf as Authorleaf } from "./author";
import CateogryReducer, { leaf as Cateogryleaf } from "./category";

const STORAGE_ADDR = "booksapp.v1.1";

export const rootReducer = combineReducers({
  [Bookleaf]: BookReducer,
  [Authorleaf]: AuthorReducer,
  [Cateogryleaf]: CateogryReducer
});

/**
 * simple solution to persist redux state to localStore
 */
const storageWrapper = (state, action) => {
  const newState = rootReducer(state, action);

  if (newState !== state)
    localStorage.setItem(STORAGE_ADDR, JSON.stringify(newState));

  return newState;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * its async so we can load localStorage .. prefetch config.. or whatever
 */
export const configStore = async () => {
  let state;

  try {
    state = JSON.parse(localStorage.getItem(STORAGE_ADDR) || "{}");
  } catch (error) {
    state = rootReducer({}, { type: "@dry_run" });
  }

  const store = createStore(
    storageWrapper,
    state,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument({ api })))
  );

  return store;
};
