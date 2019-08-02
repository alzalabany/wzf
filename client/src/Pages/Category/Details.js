import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../sdk/actions";
import Book from "../../Components/Book";

function HomePage({ cat, book }) {
  useEffect(() => {
    // fetch books
    // props.fetchAll();
  }, []);

  return (
    <div>
      {cat.map(data => (
        <Book data={book[data]} key={data} />
      ))}
    </div>
  );
}

export default connect(
  (store, props) => ({
    book: store.book.byId,
    cat: store.book.byCategory[props.match.params.categoryId]
  }),
  actions
)(HomePage);
