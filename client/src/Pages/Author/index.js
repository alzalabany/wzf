import React from "react";
import { Switch, Router } from "react-router-dom";

/** placeholders */
const AuthorCreate = () => <h1>AuthorCreate</h1>;
const AuthorEdit = () => <h1>AuthorEdit</h1>;
const AuthorDetails = () => <h1>AuthorDetails</h1>;

export default () => (
  <Switch>
    <Router path="/author/new" Component={AuthorCreate} />
    <Router path="/author/:authorId/edit" Component={AuthorEdit} />
    <Router path="/author/:authorId" Component={AuthorDetails} />
  </Switch>
);
