import React from "react";
import { SearchComics } from "./styledComponents";
import { useState } from "react";

const Search = ({ onSubmit }) => {
  const [searchString, setSearchString] = useState("test");

  const handleSubmit = () => {
    onSubmit(searchString);
  };

  const handleChange = ({ target }) => {
    setSearchString(target.value);
  };

  const handleKeyDown = ({ key }) => {
    if (key === "Enter") handleSubmit();
  };

  return (
    <div>
      <SearchComics
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
