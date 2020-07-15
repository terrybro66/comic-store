import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavLinks.module.scss";

const NavLinks = () => {
  return (
    <div className={styles.navLinks}>
      <Link to="/">Home | </Link>
      <Link to="/profile">Profile | </Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default NavLinks;
