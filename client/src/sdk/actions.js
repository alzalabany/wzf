import { batch } from "react-redux";
import * as Books from "./book/actions";
import * as Authors from "./author/actions";
import * as Categories from "./category/actions";

/**
 * fetch books, categories and authors
 */
export const fetchAll = () => (dispatch, getState, { api }) => {
  return api
    .get("/")
    .then(r => r.data)
    .then(data =>
      batch(() => {
        dispatch(Books.merge(data.books));
        dispatch(Authors.merge(data.authors));
        dispatch(Categories.merge(data.categories));
      })
    );
  // .catch(e => dispatch(hasError(e)));
};

export { Books, Authors, Categories };
