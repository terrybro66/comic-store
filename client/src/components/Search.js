import React from "react";
import { SearchComics } from "./styledComponents";

const Search = ({searchChange}) => {

  const changeStuff = () => {
    const searchWord = document.getElementById('searchId');
    searchChange(searchWord.value)
  };

  return (
    <div>
      <SearchComics id="searchId"
        type="search"
        placeholder="search comics"
      />
      <button onClick={changeStuff}>search</button>
    </div>
  );
};

export default Search;
