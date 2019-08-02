/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../sdk/actions";
import Book from "../../Components/Book";

function HomePage(props) {
  useEffect(() => {
    // fetch books
    props.fetchAll();
  }, []);

  return (
    <div>
      {Object.values(props.book).map(data => (
        <Book data={data} key={data.id} />
      ))}
    </div>
  );
}

export default connect(
  store => ({ book: store.book.byId }),
  actions
)(HomePage);
