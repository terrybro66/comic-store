import React from "react"
import styled from "styled-components"

const Card = styled.div`
  font-family:sans-serif;
  font-size:0.8em;
  display:table-cell;
  border:solid 4px #fff;
  width:228px;
  min-height: 200px;
  background-color:#ff6300;
  border-radius:12px;
  color:#333;
  margin:8px;
  padding:22px;
  transition: 0.2s all ease-in-out;
  &:hover {
    background-color: #ffb700;
    transform: scale(1.1);  
  }
  cursor:pointer;
`;
const SearchComics = styled.input`
  padding:12px;
  background-color:#ddd;
  border-radius:4px;
  border:solid 2px #999;
  margin:22px;

`;

const AppBody = styled.div`
  text-align:center;

`;

export {
  Card,
  SearchComics,
  AppBody
}