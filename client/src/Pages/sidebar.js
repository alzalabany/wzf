import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
const Sidebar = styled.div`
  width: 200px;
  border: 1px solid;
  padding: 1rem;
`;
const side = ({ category, authors }) => (
  <Sidebar>
    <h5>Categories</h5>
    <ul>
      {Object.values(category).map(c => (
        <li key={c.id}>
          <NavLink to={"/category/" + c.id}>{c.name}</NavLink>
        </li>
      ))}
    </ul>

    <h5>Authors</h5>
    <ul>
      {Object.values(authors).map(c => (
        <li key={c.id}>
          <NavLink to={"/author/" + c.id}>{c.name}</NavLink>
        </li>
      ))}
    </ul>
  </Sidebar>
);

export default connect(store => ({
  category: store.category.byId,
  authors: store.authors.byId
}))(side);
