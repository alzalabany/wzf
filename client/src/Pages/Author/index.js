import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthorDetails from "./Details";
/** placeholders */
const AuthorCreate = () => <h1>AuthorCreate</h1>;
const AuthorEdit = () => <h1>AuthorEdit</h1>;
// const AuthorDetails = () => <h1>AuthorDetails</h1>;

export default () => (
  <Switch>
    <Route path="/author/new" component={AuthorCreate} />
    <Route path="/author/:authorId/edit" component={AuthorEdit} />
    <Route path="/author/:authorId" component={AuthorDetails} />
  </Switch>
);
