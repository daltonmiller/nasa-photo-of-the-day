import React from "react";
import "./App.css";
import CardMaker from "./CardMaker";
import styled, { css } from 'styled-components'


function App() {
 
  return (
    <div className="App">
      <Nav>
       <div><a href="">boom</a></div>
       <div><a href="">boom</a></div>
       <div><a href="">boom</a></div>
       <div><a href="">boom</a></div>
      </Nav>
      <CardMaker />
    </div>
  );
}
const Nav  = styled.nav`
display: inline-block;
color: green;
display: flex;
justify-content: space-between;
border: 5px solid black;





${props =>
  props.primary &&
  css`
    background: palevioletred;
    color: red;
  `};
`

export default App;
