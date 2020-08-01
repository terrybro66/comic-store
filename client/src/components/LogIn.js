import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import fetcher from "../utils/api/fetcher";
import { useAuth } from "../contexts/AuthContext";
import styles from "./LogIn.module.scss";
import Field from "./Field";

const LogIn = ({ formData }) => {
  const { saveUser } = useAuth();
  const history = useHistory();
  const [fields, setFields] = useState(
    formData.fields.map((field) => ({
      ...field,
      name: field.name,
      value: "",
    }))
  );

  const handleChange = (e) => {
    const name = e.target.getAttribute("name");
    const newFields = fields.map((field) => {
      return field.name === name ? { ...field, value: e.target.value } : field;
    });
    setFields(newFields);
  };

  return (
    <div className={styles.darkTheme}>
      <form onSubmit={(e) => formData.login(e, fields)}>
        <h1>{formData.data.title}</h1>

        {fields.map((field) => (
          <Field key={field.label} field={field} onChange={handleChange} />
        ))}

        <input type="submit" value={formData.data.buttonValue} />
        <div className={styles.signup}>
          Not registered? <Link to={"/sign-up"}>Sign up here</Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
