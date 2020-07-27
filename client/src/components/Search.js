import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Search.module.scss";

const Search = () => {
  const history = useHistory();
  const [searchString, setSearchString] = useState("");

  const handleSubmit = () => {
    history.push("/", { search: searchString });
  };

  const handleChange = ({ target }) => {
    setSearchString(target.value);
  };

  const handleKeyDown = ({ key }) => {
    if (key === "Enter") handleSubmit();
  };

  return (
    <div className={styles.search}>
      <input
        id="searchId"
        type="search"
        placeholder="search comics"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>search</button>
    </div>
  );
};

export default Search;
