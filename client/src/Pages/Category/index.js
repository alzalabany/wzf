import React from "react";
import { Switch, Router } from "react-router-dom";

/** placeholders */
const CategoryCreate = () => <h1>BookCreate</h1>;
const CategoryEdit = () => <h1>BookEdit</h1>;
const CategoryDetails = () => <h1>BookDetails</h1>;

export default () => (
  <Switch>
    <Router path="/category/new" Component={CategoryCreate} />
    <Router path="/category/:categoryId/edit" Component={CategoryEdit} />
    <Router path="/category/:categoryId" Component={CategoryDetails} />
  </Switch>
);
