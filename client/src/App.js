import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import Pages from "./Pages";
import { rootReducer } from "./sdk";

const store = createStore(rootReducer);

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  </Provider>
);
