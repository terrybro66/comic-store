import React from "react";
import Filter from "./Filter";
import { SearchComics } from "./styledComponents";

const Search = (props) => {
  const changeStuff = (event) => {
    props.filter(event.target.value);
  };

  return (
    <div>
      <SearchComics
        type="search"
        placeholder="search comics"
        onChange={changeStuff}
        value={props.searchText}
      />
    </div>
  );
};

export default Search;
