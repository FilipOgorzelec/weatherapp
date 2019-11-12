import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const Style = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
  body{
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 90vh;
  }
`;

const Layout = ({ children }) => (
  <>
    <Style />
    <div>{children}</div>
  </>
);

export default Layout;
