import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import ManageBook from "./ManageBook";

/** placeholders */
const BookDetails = ({ match }) => (
  <h1>
    Book Details
    <NavLink to={`/book/${match.params.bookId}/edit`}>Edit</NavLink>
  </h1>
);

export default () => (
  <Switch>
    <Route path="/book/new" component={ManageBook} />
    <Route path="/book/:bookId/edit" component={ManageBook} />
    <Route path="/book/:bookId" component={BookDetails} />
  </Switch>
);
