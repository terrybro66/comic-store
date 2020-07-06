import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Search.module.scss";

const Search = ({ onSubmit }) => {
  const [searchString, setSearchString] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    onSubmit(searchString);
    history.push("/");
  };

  const handleChange = ({ target }) => {
    setSearchString(target.value);
  };

  const handleKeyDown = ({ key }) => {
    if (key === "Enter") handleSubmit();
  };

  return (
    <div className={styles["search"]}>
      <input
        id="searchId"
        type="search"
        placeholder="search comics"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        // onsearch={handleSubmit()}
      />
      <button onClick={handleSubmit}>search</button>
    </div>
  );
};

export default Search;
