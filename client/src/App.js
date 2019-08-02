import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./Pages";

export default ({ store }) => (
  <Provider store={store}>
    <Router>
      <Pages />
    </Router>
  </Provider>
);
