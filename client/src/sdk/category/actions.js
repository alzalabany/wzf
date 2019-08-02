import { merge } from "./reducer.duck";
// import { batch } from "react-redux";
// batch(() => {
//   dispatch(increment());
//   dispatch(increment());
// });

export const fetch = () => (dispatch, getState, { api }) => {
  return api
    .get("/category")
    .then(r => r.data)
    .then(data => dispatch(merge(data)));
  // .catch(e => dispatch(hasError(e)));
};

export { merge };
