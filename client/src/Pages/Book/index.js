import React from "react";
import { Switch, Router } from "react-router-dom";

/** placeholders */
const BookCreate = () => <h1>BookCreate</h1>;
const BookEdit = () => <h1>BookEdit</h1>;
const BookDetails = () => <h1>BookDetails</h1>;

export default () => (
  <Switch>
    <Router path="/book/new" Component={BookCreate} />
    <Router path="/book/:bookId/edit" Component={BookEdit} />
    <Router path="/book/:bookId" Component={BookDetails} />
  </Switch>
);
