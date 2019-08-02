import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../sdk/actions";
import Book from "../../Components/Book";

function HomePage({ cat, book, auth }) {
  useEffect(() => {
    // fetch books
    // props.fetchAll();
  }, []);

  return (
    <div>
      {cat.map(data => (
        <Book
          data={book[data]}
          key={data}
          author={auth[book[data].author].name}
        />
      ))}
    </div>
  );
}

export default connect(
  (store, props) => ({
    book: store.book.byId,
    auth: store.authors.byId,
    cat: store.book.byAuthor[props.match.params.authorId] || []
  }),
  actions
)(HomePage);
