import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "sdk/actions.js";
import Book from "Components/Book";
import * as books from "sdk/book";
import * as authors from "sdk/author";

function HomePage({ match, data, books, author, fetchAll }) {
  useEffect(() => {
    // fetch data
    fetchAll();
  }, [fetchAll]);

  if (!author) {
    return <h1>Error.. author not found !</h1>;
  }

  return (
    <div>
      <NavLink to={"/author/" + match.params.authorId + "/edit"}>Edit</NavLink>
      {data.length === 0 ? <h1>no books for {author.name} yet</h1> : null}
      {data.map(book => (
        <Book data={book} key={book.id} author={author.name} />
      ))}
    </div>
  );
}

export default connect(
  (store, { match }) => ({
    author: authors.selectById(store, match.params.authorId),
    data: books.selectOfAuthor(store, match.params.authorId)
  }),
  actions
)(HomePage);
