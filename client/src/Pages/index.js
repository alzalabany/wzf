import React from "react";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";

import Author from "./Author";
import Book from "./Book";
import Category from "./Category";

/** placeholders */
const ListAll = () => <h1>ListAll</h1>;
const Error404 = () => <h1> Opss. page not found, <NavLink to="/">Go back</NavLink></h1>;


export default () => (
  <Switch>
      <Route path="/author" component={Author}/>
      <Route path="/book" component={Book}/>
      <Route path="/category" component={Category}/>
      <Route exact path="/" component={ListAll}/>
      <Route path="/" component={Error404}/>
      <Redirect to="/404"/>
  </Switch>
);
