import React from "react";
import styles from "../Styles/Board.module.css";

function Board() {
  return (
    <div className={styles.container}>
      <div className={styles.row_container}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.row_container}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.row_container}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Board;
