import { append } from "../helper";

// Const
export const leaf = "category";
const initialState = {
  byId: {}
};

const ADD_ONE = "/category/ADD_ONE/";
const ADD_MANY = "/category/MERGE/";
const UPDATE = "/category/UPDATE/";

// helpers & logic

function addAndIndex(state, payload) {
  const { id } = payload;
  if (state.byId[id]) return state;
  return {
    ...state,
    byId: {
      [id]: payload,
      ...state.byId
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
