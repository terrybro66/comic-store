import React, { useContext, useReducer } from "react";
import { Link, useHistory } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import fetcher from "../utils/api/fetcher";
import styles from "./NavLinks.module.scss";

const NavLinks = () => {
  const history = useHistory();
  const { user, removeUser } = useContext(AuthContext);

  const takeAction = (action) => {
    console.log(action);
    switch (action) {
      case 1:
        history.push("/orders");
      case 2:
        history.push("/profile");
      case 3:
        removeUser();
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
