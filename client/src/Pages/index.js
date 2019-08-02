import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import Layout from "./layout";
import Author from "./Author";
import Book from "./Book";
import Category from "./Category";
import HomePage from "./Home";

/** placeholders */
const Error404 = () => (
  <h1>
    {" "}
    Opss. page not found, <NavLink to="/">Go back</NavLink>
  </h1>
);

export default () => (
  <Layout>
    <div
      style={{ flex: 1, minHeight: "calc(100vh - 6rem)", overflowX: "hidden" }}
    >
      <Switch>
        <Route path="/author" component={Author} />
        <Route path="/book" component={Book} />
        <Route path="/category" component={Category} />
        <Route exact path="/" component={HomePage} />
        <Route path="/" component={Error404} />
        <Redirect to="/404" />
      </Switch>
    </div>
  </Layout>
);
