import React from "react";
import { Link } from "react-router-dom";
import styles from "./Comic.module.css";

const Comic = ({ data: { id, name, description, cover, price } }) => (
  <div className={styles["comic-block"]}>
    <Link to={`/comics/${id}`}>
      <img src={cover} alt="cover" className={styles["comic-cover"]} />
    </Link>
    <div className={styles["comic-description"]}>{description}</div>
    <div className={styles["comic-price"]}>&pound;{price}</div>
    <button className={styles["comic-buy-button"]}>BUY NOW</button>
  </div>
);

export default Comic;
