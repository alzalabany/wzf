import { append } from "../helper";

// Const
export const leaf = "authors";
const initialState = {
  byId: {},
  byTitle: {}
};

const ADD_ONE = "/authors/ADD_ONE/";
const ADD_MANY = "/authors/MERGE/";
const UPDATE = "/authors/UPDATE/";

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
    byTitle: {
      ...state.byTitle,
      [payload.jobTitle]: append(state.byTitle[payload.jobTitle], id)
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
