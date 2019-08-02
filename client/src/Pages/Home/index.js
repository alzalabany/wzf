/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../sdk/actions";
import Book from "../../Components/Book";
import { usePagination } from "../../sdk/hooks";

function HomePage(props) {
  const [slice, Controls] = usePagination(props.book);
  useEffect(() => {
    // fetch books
    props.fetchAll();
  }, []);

  return (
    <div>
      {Controls}
      {slice.map(data => (
        <Book data={data} key={data.id} />
      ))}
    </div>
  );
}

export default connect(
  store => ({ book: store.book.byId }),
  actions
)(HomePage);
