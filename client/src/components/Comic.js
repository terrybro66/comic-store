import React from "react";
import { Link } from "react-router-dom";
import styles from "./Comic.module.scss";

const Comic = ({ data: { id, name, cover, price } }) => (
  <div className={styles["comic"]}>
    <Link to={`/comics/${id}`}>
      <img src={cover} alt="cover" className={styles["comic__cover"]} />
    </Link>
    <div className={styles["comic__name"]}>{name}</div>
    <div className={styles["comic__price"]}>&pound;{price}</div>
    <button className={styles["comic__buy-button"]}>BUY NOW</button>
  </div>
);

export default Comic;
