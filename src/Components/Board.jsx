import React from "react";
import styles from "../Styles/Board.module.css";
import Card from "./Card";

function Board() {
  return (
    <div className={styles.container}>
      <div className={styles.row_container}>
        <div><Card /></div>
        <div><Card /></div>
        <div><Card /></div>
      </div>
      <div className={styles.row_container}>
        <div><Card /></div>
        <div><Card /></div>
        <div><Card /></div>
      </div>
      <div className={styles.row_container}>
        <div><Card /></div>
        <div><Card /></div>
        <div><Card /></div>
      </div>
    </div>
  );
}

export default Board;
