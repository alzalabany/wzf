import React from "react";
// import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "sdk/author/actions";
import * as authors from "sdk/author";
import CreateAuthorForm from "./CreateForm";

function ManageAuthor({ history, author, add, edit }) {
  return (
    <div>
      <h1>{author ? "Edit " : "Create "} Author</h1>
      <CreateAuthorForm
        onSuccess={id => history.push("/author/" + id)}
        initialData={author}
        addAuthor={add}
        editAuthor={edit}
      />
    </div>
  );
}
export default connect(
  (store, { match }) => ({
    author: authors.selectById(store, match.params.authorId)
  }),
  actions
)(ManageAuthor);
