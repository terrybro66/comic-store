import React, { useState, useEffect } from "react";
import Comic from "./Comic.js";
import comicsApi from "../utils/api/comics";
import Pagination from "./Pagination";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);
  useEffect(() => {
    setCurrentPage(1);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state.search]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await comicsApi.get("", {
        params: {
          page: currentPage,
          search: location.state.search,
          size: 6,
        },
      });
      setComics(response.data.results);
      setPageCount(response.data.total_pages);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const comicsContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "108rem",
    margin: "0 auto",
  };
  const comicsHeader = {
    maxWidth: "108rem",
    textAlign: "left",
    margin: "2rem auto 0",
  };

  const renderContent = () => {
    if (isLoading) return <Loading />;
    if (comics.length === 0) return <div>No results found</div>;
    return (
      <div>
        <h1 style={comicsHeader}>Your Results</h1>
        <div style={comicsContainer}>
          {comics.map((comic) => (
            <Comic data={comic} key={`Comic-${comic.id}`} />
          ))}
        </div>
        {pageCount && (
          <Pagination
            pageCount={pageCount}
            onUpdate={setCurrentPage}
            currentPage={currentPage}
          />
        )}
      </div>
    );
  };

  return <div>{renderContent()}</div>;
};

export default Comics;
