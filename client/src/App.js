import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter as Router} from "react-router-dom";
import Pages from "./Pages";
import {rootReducer} from "./sdk";

const store = createStore(rootReducer);

export default () => (
  <Provider store={store}>
      <Router>
      <Pages />
      </Router>
  </Provider>
);
