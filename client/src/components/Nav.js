import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import fetcher from "../utils/api/fetcher";

const TempButton = ({ title, onClick }) => (
  <div
    style={{
      border: "1px solid red",
      marginLeft: "10px",
      width: "60px",
      backgroundColor: "red",
      padding: "10px",
      color: "white",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    {title}
  </div>
);

const DEMO_USERNAME = "Test2";
const DEMO_PASSWORD = "password";

const Nav = () => {
  const { user, saveUser, removeUser } = useContext(AuthContext);

  const handleSignUp = async ({
    username = DEMO_USERNAME,
    password1 = DEMO_PASSWORD,
    password2 = DEMO_PASSWORD,
  }) => {
    try {
      await fetcher.post("signup/", {
        username,
        password1,
        password2,
      });
      handleLogIn({ username, password: password1 });
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogIn = async ({
    username = DEMO_USERNAME,
    password = DEMO_PASSWORD,
  }) => {
    const { data } = await fetcher.post("login/", {
      username,
      password,
    });
    saveUser(data.access);
  };

  return (
    <ul>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {user ? (
          <TempButton title="Log Out" onClick={removeUser} />
        ) : (
          <div style={{ display: "flex" }}>
            <TempButton title="Sign Up" onClick={handleSignUp} />
            <TempButton title="Log In" onClick={handleLogIn} />
          </div>
        )}
      </div>
    </ul>
  );
};

export default Nav;
