import React from "react";
import { useState, useEffect } from "react";
import comicsApi from "../utils/api/comics";

const Detail = ({ match }) => {
  const [comic, setComic] = useState({});

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await comicsApi.get(match.params.id);
      setComic(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <h1>
        <img src={comic.cover} alt="cover" />
      </h1>
    </div>
  );
};

export default Detail;
