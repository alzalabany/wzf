import { addOne, merge, update } from ".";

export const fetch = () => (dispatch, getState, { api }) => {
  return api
    .get("/author")
    .then(r => r.data)
    .then(data => dispatch(merge(data)));
  // .catch(e => dispatch(hasError(e)));
  // we will not catch to let error bubble up to component
};

export const add = data => (dispatch, getState, { api }) => {
  return api
    .post("/author", data)
    .then(r => r.data.insertId)
    .then(id => {
      dispatch(addOne({ ...data, id }));
      return id;
    });
  // .catch(e => dispatch(hasError(e)));
  // we will not catch to let error bubble up to component
};

export const edit = data => (dispatch, getState, { api }) => {
  return api.put("/author", data).then(id => dispatch(update({ ...data })));
  // .catch(e => dispatch(hasError(e)));
  // we will not catch to let error bubble up to component
};

export { addOne, merge };
