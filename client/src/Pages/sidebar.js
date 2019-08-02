import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { usePagination } from "../sdk/hooks";
const Sidebar = styled.div`
  width: 200px;
  border: 1px solid;
  padding: 1rem;
`;
function SideBarCmp({ book, category, authors }) {
  const [slice, Controls] = usePagination(category);
  const [slice2, Controls2] = usePagination(authors);
  return (
    <Sidebar>
      <h5>Categories</h5>
      {Controls}
      <ul>
        {slice.map(c => (
          <li key={c.id}>
            [{(book.byCategory[c.id] || []).length}]
            <NavLink to={"/category/" + c.id}>{c.name}</NavLink>
          </li>
        ))}
      </ul>

      <h5>Authors</h5>
      {Controls2}
      <ul>
        {slice2.map(c => (
          <li key={c.id}>
            [{(book.byAuthor[c.id] || []).length}]
            <NavLink to={"/author/" + c.id}>{c.name}</NavLink>
          </li>
        ))}
      </ul>
    </Sidebar>
  );
}
export default connect(store => ({
  book: store.book,
  category: store.category.byId,
  authors: store.authors.byId
}))(SideBarCmp);
