import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/cart">Cart</Link>
    </ul>
  );
};

export default Nav;
