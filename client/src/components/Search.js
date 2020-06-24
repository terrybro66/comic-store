import React from "react";
import { SearchComics } from "./styledComponents";

const Search = ({ searchChange }) => {
  const searchComics = () => {
    const searchWord = document.getElementById("searchId");
    searchChange(searchWord.value);
  };

  return (
    <div>
      <SearchComics
        id="searchId"
        type="search"
        placeholder="search comics"
        onsearch="searchComics"
      />
      <button onClick={searchComics}>search</button>
    </div>
  );
};

export default Search;
