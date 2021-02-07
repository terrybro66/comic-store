import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import fetcher from "../utils/api/fetcher";
import styles from "./LogIn.module.scss";

const SignUp = () => {
  const history = useHistory();
  const { saveUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleLogIn = async () => {
    const { data } = await fetcher.post("login/", {
      username,
      password1,
    });
    saveUser(data.access);
    history.push("/");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await fetcher.post("signup/", {
        username,
        password1,
        password2,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.darkTheme}>
      <form onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
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
          placeholder="Password"
          value={password1}
          onChange={(e) => setPassword1(e.currentTarget.value)}
        />

        <label>Confirm password</label>
        <input
          type="password"
          placeholder="Password"
          value={password2}
          onChange={(e) => setPassword2(e.currentTarget.value)}
        />

        <input type="submit" value="Sign up" />
      </form>
    </div>
  );
};

export default SignUp;
