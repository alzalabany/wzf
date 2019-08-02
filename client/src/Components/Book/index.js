import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Body = styled(NavLink)`
  display: flex;
  border: 1px solid;
  margin: 0.6rem 1rem;
  > img {
    width: 12rem;
    height: 12rem;
  }
  > div {
    padding: 0 1rem;
    flex: 1;
    max-height: 12rem;
  }
  & h1 {
    color: navy;
  }
  h1 > small {
    display: block;
  }
  & p {
    color: var(--gray);
    overflow: hidden;
  }
`;

export default ({ data, author }) => (
  <Body to={"/book/" + data.id}>
    <img src={data.image} alt={data.title} />
    <div>
      <h1>
        {data.title} {author && <small>By:{author}</small>}
      </h1>
      <p>{data.description}</p>
    </div>
  </Body>
);
