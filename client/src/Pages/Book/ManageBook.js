import React from "react";
// import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "sdk/book/actions";
import * as authors from "sdk/author";
import * as categories from "sdk/category";
import BookForm from "./BookForm";

function ManageBook({ match, history, manage, books, authors, categories }) {
  const id = match.params.bookId;
  const data = id ? books[id] : undefined;

  return (
    <div>
      <h1>{data ? "Edit " : "Create "} Book</h1>
      <BookForm
        onSuccess={id => history.push("/book/" + id)}
        initialData={data}
        addOreditBook={manage}
        authors={Object.values(authors)}
        categories={Object.values(categories)}
      />
    </div>
  );
}
export default connect(
  (store, props) => ({
    books: store.book.byId,
    categories: categories.select(store).byId,
    authors: authors.select(store).byId
  }),
  actions
)(ManageBook);
