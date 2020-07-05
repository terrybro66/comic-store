import React from "react";
import { useState, useEffect } from "react";

const Search = ({ onSubmit }) => {
  const [searchString, setSearchString] = useState("");

  const handleSubmit = () => {
    onSubmit(searchString);
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  const handleChange = ({ target }) => {
    setSearchString(target.value);
  };

  const handleKeyDown = ({ key }) => {
    if (key === "Enter") handleSubmit();
  };

  return (
    <div>
      <input
        id="searchId"
        type="search"
        placeholder="search comics"
        onsearch="searchComics"
        value={searchString}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>search</button>
    </div>
  );
};

export default Search;
