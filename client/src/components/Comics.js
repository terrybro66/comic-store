import React, { useState, useEffect } from "react";
import Comic from "./Comic.js";
import Search from "./Search";
import fetcher from "../utils/api/fetcher";
import Pagination from "./Pagination";
import Loading from "./Loading";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.js";

function Comics() {
  const { user } = useContext(AuthContext);
  const [comics, setComics] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, currentPage, searchString]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetcher.get("comics", {
        params: {
          page: currentPage,
          search: searchString,
          size: 12,
        },
      });
      setComics(response.data.results);
      setPageCount(response.data.total_pages);
    } catch (e) {
      if (e.response.status === 401) setComics([]);
    }
    setIsLoading(false);
  };

  const handleSearch = (term) => {
    setCurrentPage(1);
    setSearchString(term);
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
    margin: "0 auto",
  };

  const renderContent = () => {
    if (isLoading) return <Loading />;
    if (!user || comics.length === 0) return <div>No results found</div>;
    return (
      <div>
        <h1 style={comicsHeader}>Hi {user.username}, here are your results</h1>
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

  return (
    <div>
      <Search onSubmit={handleSearch} />
      {renderContent()}
    </div>
  );
}

export default Comics;
