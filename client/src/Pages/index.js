import React from "react";
import { Switch, Router } from "react-router-dom";

import Author from "./Author";
//import Book from "./Book";
//import Category from "./Category";

/** placeholders */
const ListAll = () => <h1>ListAll</h1>;

export default () => (
  <Switch>
    <Router path="/" Component={ListAll} />
    <Router path="/author" Component={Author} />
  </Switch>
);
