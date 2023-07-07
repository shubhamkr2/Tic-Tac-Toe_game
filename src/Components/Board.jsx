import React, { useState } from "react";
import styles from "../Styles/Board.module.css";
import Card from "./Card";

const initialState = [null, null, null, null, null, null, null, null, null];

function Board() {
  const [state, setState] = useState(initialState);
  return (
    <div className={styles.container}>
      <div className={styles.row_container}>
        <div>
          <Card value={state[0]} />
        </div>
        <div>
          <Card value={state[1]} />
        </div>
        <div>
          <Card value={state[2]} />
        </div>
      </div>
      <div className={styles.row_container}>
        <div>
          <Card value={state[3]} />
        </div>
        <div>
          <Card value={state[4]} />
        </div>
        <div>
          <Card value={state[5]} />
        </div>
      </div>
      <div className={styles.row_container}>
        <div>
          <Card value={state[6]} />
        </div>
        <div>
          <Card value={state[7]} />
        </div>
        <div>
          <Card value={state[8]} />
        </div>
      </div>
    </div>
  );
}

export default Board;
