import React from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import styles from "./NavLinks.module.scss";

const NavLinks = () => {
  const history = useHistory();
  const { user, removeUser } = useAuth();

  const takeAction = (action) => {
    console.log(action);
    switch (action) {
      case 1:
        history.push("/orders");
        break;
      case 2:
        history.push("/profile");
        break;
      case 3:
        removeUser();
        history.push("/");
        break;
      default:
        return;
    }
  };

  const handleChange = (e) => {
    takeAction(e.target.selectedIndex);
  };

  return (
    <div className={styles.navLinks}>
      <Link to="/">Home | </Link>
      {!user ? (
        <>
          <Link to="/sign-up">Sign Up | </Link>
          <Link to="/log-in">Log In </Link>
        </>
      ) : (
        <span>
          Hi {user.username}
          <select onChange={handleChange}>
            <option>Select</option>
            <option>Order history</option>
            <option>Edit profile</option>
            <option>Log out</option>
          </select>
        </span>
      )}
    </div>
  );
};
export default NavLinks;
