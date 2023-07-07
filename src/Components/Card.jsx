import React from "react";
import styles from "../Styles/Card.module.css";

function Card({value}) {
  return (
    <div className={styles.card_container}>
      <h3>{value}</h3>
    </div>
  );
}

export default Card;
