import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoryDetails from "./Details";
/** placeholders */
const CategoryCreate = () => <h1>CategoryCreate</h1>;
const CategoryEdit = () => <h1>CategoryEdit</h1>;
// const CategoryDetails = () => <h1>CategoryDetails</h1>;

export default () => (
  <Switch>
    <Route path="/category/new" component={CategoryCreate} />
    <Route path="/category/:categoryId/edit" component={CategoryEdit} />
    <Route path="/category/:categoryId" component={CategoryDetails} />
  </Switch>
);
