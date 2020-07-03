import React from "react";
import { useState, useEffect } from "react";
import comicsApi from "../utils/api/comics";
import styles from "./Detail.module.scss";

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
    <div className={styles["detail"]}>
      <div className={styles["detail__col1"]}>
        <div className={styles["detail__cover"]}>
          <img src={comic.cover} alt="cover" />
        </div>
      </div>
      <div className={styles["detail__col2"]}>
        <div className={styles["detail__cover"]}>
          <h1 className={styles["detail__title"]}>{comic.name}</h1>
          <p>
            <strong>Publisher:</strong> {comic.publisher}
          </p>
          <p>
            <strong>Stock status: </strong>
            <span className={styles["detail__instock"]}>In Stock</span>
          </p>
          <p>
            <strong>Delivery: FREE UK </strong>1st Class delivery on this item
          </p>
          <p>
            <strong>Price: &nbsp;</strong>
            <span className={styles["detail__price"]}>
              &pound;{comic.price}
            </span>
          </p>
          <button className={styles["detail__buy-button"]}>BUY NOW</button>
        </div>
        <div className={styles["detail__description"]}>
          <h3 className={styles["detail__description-heading"]}>Description</h3>

          <p>{comic.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
