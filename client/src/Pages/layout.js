import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./sidebar";
const Container = styled.div`
  padding-top: 6rem;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-flow: row wrap;
`;
const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  height: 5rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  padding: 0 1rem;
  > a {
    font-size: 2rem;
    line-height: 5rem;
    flex: 1;
  }
  > ul {
    list-style: none;
    display: flex;
  }
  > ul > li {
    width: 6rem;
  }
  > ul > li > a {
    line-height: 4rem;
  }
`;

const Navbar = () => (
  <Nav>
    <NavLink to="/">Booking app</NavLink>
    <ul>
      <li>
        <NavLink to="/book/new">+ book</NavLink>
      </li>

      <li>
        <NavLink to="/category/new">+ category</NavLink>
      </li>

      <li>
        <NavLink to="/author/new">+ author</NavLink>
      </li>
    </ul>
  </Nav>
);

export default ({ children }) => (
  <Container>
    <Navbar />

    <Sidebar />
    {children}
  </Container>
);
