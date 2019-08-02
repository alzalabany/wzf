import { createSelector } from "reselect";
import { append } from "sdk/helper";

// Const
export const leaf = "book";
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

// Reducer
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
export const addOne = payload => ({
  type: ADD_ONE,
  payload
});

export const merge = payload => ({
  type: ADD_MANY,
  payload: Array.isArray(payload) ? payload : [payload]
});

export const update = payload => ({
  type: UPDATE,
  payload
});

// Selectors
export const select = store => store[leaf];
export const selectOfAuthor = createSelector(
  select,
  (_, id) => id,
  (state, id) => {
    console.log("State is", state.byAuthor[id]);
    const arr = state.byAuthor[id];
    if (!arr) return [];
    return arr.map(id => state.byId[id]);
  }
);
