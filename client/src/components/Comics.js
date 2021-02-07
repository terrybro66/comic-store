import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import fetcher from "../utils/api/fetcher";

import Comic from "./Comic.js";
import Pagination from "./Pagination";
import Loading from "./Loading";

import styles from "./Comics.module.scss";

function Comics() {
  const [comics, setComics] = useState([]);

  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();
  const searchParam = location.state?.search;

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, searchTerm, pageSize]);

  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize, searchParam]);

  useEffect(() => {
    setSearchTerm(searchParam || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParam]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetcher.get("comics", {
        params: {
          page: currentPage,
          search: searchTerm,
          size: pageSize,
        },
      });
      setComics(response.data.results);
      setPageCount(response.data.total_pages);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  if (isLoading) return <Loading />;
  if (comics.length === 0) return <div>No results found</div>;

  return (
    <div>
      <h1 className={styles["comics__header"]}>Your Results</h1>
      <div className={styles["comics__settings"]}>
        <div className={styles["comics__pagesize"]}>
          <div>{pageSize}</div>
          <input
            type="range"
            min={6}
            max={36}
            step={6}
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
          />
        </div>
        {pageCount && (
          <Pagination
            pageCount={pageCount}
            onUpdate={setCurrentPage}
            currentPage={currentPage}
          />
        )}
      </div>
      <div className={styles["comics__container"]}>
        {comics.map((comic) => (
          <Comic data={comic} key={`Comic-${comic.id}`} />
        ))}
      </div>
    </div>
  );
}

export default Comics;
