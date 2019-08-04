/**
 * Books Module
 *
 * Using JSdocs for TypeChecking for safe typing but mostly to allow vscode to autocomplete params :)
 * usually i organize typedef in its own files, but for sake of time, during this demo i will just include it inline.
*/

/**
 * @typedef BookStore
 * @property {Object.<string, Book>}  byId             - Map contain all books
 * @property {Object.<string, string[]>}  byAuthor     - Array of BooksIds
 * @property {Object.<string, string[]>}  byCategory   - Array of BooksIds
 * @property {Object.<string, string[]>}  byYear       - Array of BooksIds
 *
 * @typedef Book
 * @property {string} id
 * @property {string} title
 * @property {string} author
 * @property {string} description
 * @property {string} isbn
 * @property {number} publishYear
 * @property {number} pagesNumber
 * @property {string} image
 * @property {string} category
*/
import { createSelector } from "reselect";
import { append } from "sdk/helper";

export const leaf = "book";

/** @type BookStore **/
const initialState = {
  byId: {},
  byAuthor: {},
  byCategory: {},
  byYear: {}
};

const ADD_ONE = "/book/ADD_ONE/";
const ADD_MANY = "/book/MERGE/";
const UPDATE = "/book/UPDATE/";

// helpers & logic

/**
 * Add a Book to state and index its id
 * @param {BookStore} state
 * @param {Book} payload
 */
function addAndIndex(state, payload) {
  const { id } = payload;
  if (state.byId[id]) return state;
  return {
    ...state,
    byId: {
      [id]: payload,
      ...state.byId
    },
    byAuthor: {
      ...state.byAuthor,
      [payload.author]: append(state.byAuthor[payload.author], id)
    },
    byCategory: {
      ...state.byCategory,
      [payload.category]: append(state.byCategory[payload.category], id)
    },
    byYear: {
      ...state.byYear,
      [payload.publishYear]: append(state.byYear[payload.publishYear], id)
    }
  };
}


/**
 * Book Reducer
 * @param {BookStore} state
 * @param {*} action
 */
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ONE:
      return addAndIndex(state, payload);
    case ADD_MANY:
      return action.payload.reduce(addAndIndex, state);
    case UPDATE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [payload.id]: payload
        }
      };
    default:
      return state;
  }
}

// Simple Actions
/**
 * @param {Book} payload
 * @return {{type: typeof ADD_ONE, payload: Book}}
 */
export const addOne = payload => ({
  type: ADD_ONE,
  payload
});

/**
 * @param {Book[]} payload
 * @return {{type: typeof ADD_MANY, payload: Book[]}}
 */
export const merge = payload => ({
  type: ADD_MANY,
  payload: Array.isArray(payload) ? payload : [payload]
});

export const update = payload => ({
  type: UPDATE,
  payload
});

///////////////
// Selectors //
///////////////
/** @return BookStore */
export const select = store => store[leaf];

/**
 * @return {Book[]} - books written by single author
 */
export const selectOfAuthor = createSelector(
  select,
  (_, id) => id,
  /**
   * @param {Store} state
   * @param {string} cid
   * @return {Book[]}
   */
  (state, id) => {
    console.log("State is", state.byAuthor[id]);
    const arr = state.byAuthor[id];
    if (!arr) return [];
    return arr.map(id => state.byId[id]);
  }
);
