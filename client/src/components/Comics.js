import React, { useState, useEffect } from "react";
import Comic from "./Comic.js";
import comicsApi from "../utils/api/comics";
import Pagination from "./Pagination";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import styles from "./Comics.module.scss";

const Comics = () => {
  const [comics, setComics] = useState([]);

  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, searchTerm, pageSize]);

  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize]);

  useEffect(() => {
    setCurrentPage(1);
    setSearchTerm(location.state?.search || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state?.search]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await comicsApi.get("", {
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

  const renderContent = () => {
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
  };

  return <div>{renderContent()}</div>;
};

export default Comics;
