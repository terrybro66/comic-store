import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import fetcher from "../utils/api/fetcher";
import styles from "./LogIn.module.scss";
import formData from "./formData";
import Field from "./Field";

const LogIn = () => {
  const history = useHistory();
  const { saveUser } = useAuth();

  const { data, fields } = formData;

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const handleLogIn = async (e) => {
    e.preventDefault();
    console.log(datum);
    const { data } = await fetcher.post("login/", {
      // username,
      // password,
    });
    saveUser(data.access);
    history.push("/");
  };
  const handleChange = (e) => {
    console.log(e.currentTarget.value);
  };

  return (
    <div className={styles.darkTheme}>
      <form onSubmit={handleLogIn}>
        <h1>{data.title}</h1>

        {fields.map((field) => (
          <Field key={field.label} field={field} onChange={handleChange} />
        ))}

        <input type="submit" value={data.buttonText} />
        <div className={styles.signup}>
          Not registered? <Link to={"/sign-up"}>Sign up here</Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
