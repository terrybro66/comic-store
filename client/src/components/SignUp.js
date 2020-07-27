import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import fetcher from "../utils/api/fetcher";

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

  const handleSignUp = async () => {
    try {
      await fetcher.post("signup/", {
        username,
        password1,
        password2,
      });
      handleLogIn({ username, password: password1 });
    } catch (error) {
      console.log(error);
    }
  };

  const signupContainer = {
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
  const signupHeader = {
    maxWidth: "38rem",
    textAlign: "left",
    margin: "2rem auto 0",
  };

  return (
    <div>
      <h1 style={signupHeader}>Sign Up</h1>
      <form onSubmit={handleSignUp} style={signupContainer}>
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
          <input
            type="password"
            name="password1"
            placeholder="Password"
            value={password1}
            onChange={(e) => setPassword1(e.currentTarget.value)}
          />
        </p>
        <p>
          <input
            type="password2"
            name="password2"
            placeholder="Password"
            value={password2}
            onChange={(e) => setPassword2(e.currentTarget.value)}
          />
        </p>

        <button onClick={handleSignUp}>Log in</button>
      </form>
    </div>
  );
};

export default SignUp;
