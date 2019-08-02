import { addOne, merge, update } from ".";
import * as authors from "../author";
import * as categories from "../category";

export const fetch = () => (dispatch, getState, { api }) => {
  return api
    .get("/")
    .then(r => r.data)
    .then(data => dispatch(merge(data)));
  // .catch(e => dispatch(hasError(e)));
  // we will not catch to let error bubble up to component
};

export const add = data => (dispatch, getState, { api }) => {
  return api
    .post("/book", data)
    .then(r => r.data.insertId)
    .then(id => {
      dispatch(addOne({ ...data, id }));
      return id;
    });
  // .catch(e => dispatch(hasError(e)));
  // we will not catch to let error bubble up to component
};

export const edit = data => (dispatch, getState, { api }) => {
  return api.put("/book", data).then(() => {
    dispatch(update({ ...data }));
  });
  // .catch(e => dispatch(hasError(e)));
  // we will not catch to let error bubble up to component
};

const e = message =>
  Promise.reject({
    type: "VALIDATION",
    message
  });
export const manage = data => (dispatch, getState, { api }) => {
  const store = getState();
  const author = authors.selectById(store, data.author);
  const category = categories.selectById(store, data.category);

  // usually this should be handled in a lib. and return an object with problems.
  // still same concept applies.
  if (!author) return e("author is required...");

  if (!category) return e("category is required...");

  if (!data.title || !data.isbn) return e("title is required");

  return data.id ? dispatch(edit(data)) : dispatch(add(data));
};

export { addOne, merge, update };
