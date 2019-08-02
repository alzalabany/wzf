import { addOne, merge } from ".";

export const fetch = () => (dispatch, getState, { api }) => {
  return api
    .get("/category")
    .then(r => r.data)
    .then(data => dispatch(merge(data)));
  // .catch(e => dispatch(hasError(e)));
  // we will not catch to let error bubble up to component
};

export const add = data => (dispatch, getState, { api }) => {
  return api
    .post("/category", data)
    .then(r => r.data.insertId)
    .then(id => {
      dispatch(addOne({ ...data, id }));
      return id;
    });
  // .catch(e => dispatch(hasError(e)));
  // we will not catch to let error bubble up to component
};

export { addOne, merge };
