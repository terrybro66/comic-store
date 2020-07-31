import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import fetcher from "../utils/api/fetcher";
import styles from "./LogIn.module.scss";
import formData from "./formData";

const LogIn = () => {
  const history = useHistory();
  const { saveUser } = useAuth();

  const { data, fields } = formData;
  console.log("fields", fields);

  const [datum, setData] = useState(
    fields.map((field) => ({
      ...field,
      name: field.name,
      value: "",
    }))
  );

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const handleLogIn = async (e) => {
    e.preventDefault();
    console.log(datum);
    const { data } = await fetcher.post("login/", {
      // datum,
      // password,
    });
    saveUser(data.access);
    history.push("/");
  };
  const handleChange = (e) => {
    console.log(e.currentTarget.value);
  };

  const Field = ({ field, onChange }) => {
    const { label, ...attributes } = field;

    return (
      <>
        <label>{label}</label>
        <input onChange={onChange} {...attributes} />
      </>
    );
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
