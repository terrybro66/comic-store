import React from "react";
import { SearchComics } from "./styledComponents";

const Search = (props) => {
  const changeStuff = (event) => {


  };

  return (
    <div>
      <SearchComics
        type="search"
        placeholder="search comics"
        value={props.searchText}
      />
      {/* <button onClick={changeStuff(event)}>search</button> */}
    </div>
  );
};

export default Search;
