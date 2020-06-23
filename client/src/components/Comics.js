import React, { useState, useEffect, Fragment } from "react";
import Comic from "./Comic.js";
import Search from "./Search";
import comicsApi from "../utils/api/comics";
import Pagination from "./Pagination";
import Loading from "./Loading";
import axios from "axios";

function Comics() {
  const [comics, setComics] = useState([]);
  const [pages, setPages] = useState({});
  const [nextPage, setNextPage] = useState("");
  const [searchString, setSearchString] = useState("");

  const fetchData = async (page) => {
    let api = comicsApi + searchString + "?page=" + page;
    console.log(api)
    setSearchString("");

    try {
      let response = await axios.get(api);
      setComics(response.data.results);
      setPages(response.data.count);
      setNextPage(response.data.next);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  const onSearch = (word) => {
    setSearchString("?search" + word);
    console.log("!!!!", searchString )
    fetchData(1);
  };

  const setPage = (page) => {
    fetchData(page);
  };

  return (
    <div>
      {comics.length === 0 ? (
        <Loading />
      ) : (
        <Fragment>
          <Search searchChange={onSearch} />
          <Comic comics={comics} />
          <Pagination comics={pages} page={setPage} nextPage={nextPage} />
        </Fragment>
      )}
    </div>
  );
}

export default Comics;
