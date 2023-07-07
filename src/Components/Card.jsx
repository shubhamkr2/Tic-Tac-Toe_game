import React from "react";
import styles from "../Styles/Card.module.css";

function Card({ value, index, handleClick }) {
  return (
    <div className={styles.card_container} onClick={() => handleClick(index)}>
      <h3>{value}</h3>
    </div>
  );
}

export default Card;
