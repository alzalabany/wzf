import React from "react";
import {Route, Switch} from "react-router-dom";

/** placeholders */
const BookCreate = () => <h1>BookCreate</h1>;
const BookEdit = () => <h1>BookEdit</h1>;
const BookDetails = () => <h1>BookDetails</h1>;

export default () => (
    <Switch>
        <Route path="/book/new" component={BookCreate}/>
        <Route path="/book/:bookId/edit" component={BookEdit}/>
        <Route path="/book/:bookId" component={BookDetails}/>
    </Switch>
);
