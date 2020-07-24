import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import fetcher from "../utils/api/fetcher";

const LogIn = () => {
  const history = useHistory();
  const { saveUser } = useContext(AuthContext);
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

  const loginContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "38rem",
    margin: "1rem auto",
    backgroundColor: "#01a418",
    padding: "2rem 4rem 4rem",
    borderRadius: "0.4rem",
    fontSize: "1.4rem",
  };
  const loginHeader = {
    maxWidth: "38rem",
    textAlign: "left",
    margin: "2rem auto 0",
  };
  return (
    <div>
      <h1 style={loginHeader}>Log In</h1>
      <form onSubmit={handleLogIn} style={loginContainer}>
        <p>
          <input
            type="text"
            name="email"
            placeholder="Email address"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </p>
        <p>
          No account? <Link to={"/signUp"}>Sign up here</Link>
        </p>
        <p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </p>
        <p>
          <Link to={"/password_reset"}>Forgoton password?</Link>
        </p>
        <button onClick={handleLogIn}>Log in</button>
      </form>
    </div>
  );
};

export default LogIn;
