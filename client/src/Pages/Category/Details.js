import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../sdk/actions";
import Book from "../../Components/Book";
import { usePagination } from "../../sdk/hooks";

function HomePage({ cat, book }) {
  const [slice, Controls] = usePagination(cat);
  useEffect(() => {
    // fetch books
    // props.fetchAll();
  }, []);

  return (
    <div>
      {Controls}
      {slice.map(data => (
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
