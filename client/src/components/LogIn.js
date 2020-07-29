import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import fetcher from "../utils/api/fetcher";
import styles from "./LogIn.module.scss";

const LogIn = () => {
  const history = useHistory();
  const { saveUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async (e) => {
    e.preventDefault();
    const { data } = await fetcher.post("login/", {
      username,
      password,
    });
    saveUser(data.access);
    history.push("/");
  };

  return (
    <div className={styles.darkTheme}>
      <form onSubmit={handleLogIn}>
        <h1>Log in to your account</h1>
        <label>Email address</label>
        <input
          type="text"
          name="email"
          placeholder="Email address"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />

        <input type="submit" value="Log in" />
        <div className={styles.signup}>
          Not registered? <Link to={"/sign-up"}>Sign up here</Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
