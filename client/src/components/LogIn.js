import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import fetcher from "../utils/api/fetcher";
import { useAuth } from "../contexts/AuthContext";
import styles from "./LogIn.module.scss";
import formData from "./formData";
import Field from "./Field";

const LogIn = () => {
  const { saveUser } = useAuth();
  const history = useHistory();

  const { data, fields } = formData;

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const handleChange = (e) => {
    console.log(e.currentTarget.value);
    // setFormData;
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    const { data } = await fetcher.post("login/", {
      // username,
      // password,
    });
    saveUser(data.access);
    history.push("/");
  };

  return (
    <div className={styles.darkTheme}>
      <form onSubmit={handleLogIn}>
        <h1>{data.title}</h1>

        {fields.map((field) => (
          <Field key={field.label} field={field} onChange={handleChange} />
        ))}

        <input type="submit" value={data.buttonValue} />
        <div className={styles.signup}>
          Not registered? <Link to={"/sign-up"}>Sign up here</Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
