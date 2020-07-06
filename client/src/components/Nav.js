import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles["nav"]}>
      <Link to="/">Home | </Link>
      <Link to="/profile">Profile | </Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default Nav;
