import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "./LogIn.module.scss";
import Field from "./Field";

const LogIn = () => {
  const location = useLocation();
  const forLogin = location.pathname === "/log-in";

  const { logIn, signUp } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    forLogin
      ? await logIn(email, password)
      : await signUp(email, password, passwordConfirmation);
    history.push("/");
  };

  return (
    <div className={styles.darkTheme}>
      <form onSubmit={handleSubmit}>
        <h1>{forLogin ? "Log into your account" : "Sign up here"}</h1>
        <Field
          label="Email Address"
          type="text"
          value={email}
          onChange={setEmail}
        />
        <Field
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
        />
        {!forLogin && (
          <Field
            label="Confirm Password"
            type="password"
            value={passwordConfirmation}
            onChange={setPasswordConfirmation}
          />
        )}
        <button type="submit">{forLogin ? "Log in" : "Register"}</button>
        {forLogin && (
          <div className={styles.signup}>
            Not registered? <Link to={"/sign-up"}>Sign up here</Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default LogIn;
