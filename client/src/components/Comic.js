import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./styledComponents";

const Comic = ({ data: { id, name, description, cover, price } }) => (
  <Card>
    <Link to={`/comics/${id}`}>
      <h3>{name} </h3>
      {description}
      <img src={cover} alt="cover" />
      {price}
    </Link>
  </Card>
);

export default Comic;
