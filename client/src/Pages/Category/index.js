import React from "react";
import {Route, Switch} from "react-router-dom";

/** placeholders */
const CategoryCreate = () => <h1>BookCreate</h1>;
const CategoryEdit = () => <h1>BookEdit</h1>;
const CategoryDetails = () => <h1>BookDetails</h1>;

export default () => (
    <Switch>
        <Route path="/category/new" component={CategoryCreate}/>
        <Route path="/category/:categoryId/edit" component={CategoryEdit}/>
        <Route path="/category/:categoryId" component={CategoryDetails}/>
    </Switch>
);
