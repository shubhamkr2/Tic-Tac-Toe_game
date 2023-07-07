import React, { useState } from "react";
import styles from "../Styles/Board.module.css";
import Card from "./Card";

const initialState = [null, null, null, null, null, null, null, null, null];

function Board() {
  const [state, setState] = useState(initialState);
  const [isxTurn, setIsxTurn] = useState(false);

  function handleClick(index) {
    const newState = [...state];
    if (state[index] === null) {
      if (isxTurn) {
        newState[index] = "X";
      } else {
        newState[index] = "O";
      }
      setState(newState);
      setIsxTurn(!isxTurn);
    }
    return;
  }

  return (
    <>
      <div className={styles.active_player}>
        <span className={isxTurn?styles.default:styles.active}>Turn- O</span>
        <span className={isxTurn?styles.active:styles.default}>Turn- X</span>
      </div>
      <div className={styles.container}>
        <div className={styles.row_container}>
          <Card value={state[0]} index={0} handleClick={handleClick} />

          <Card value={state[1]} index={1} handleClick={handleClick} />

          <Card value={state[2]} index={2} handleClick={handleClick} />
        </div>
        <div className={styles.row_container}>
          <Card value={state[3]} index={3} handleClick={handleClick} />

          <Card value={state[4]} index={4} handleClick={handleClick} />

          <Card value={state[5]} index={5} handleClick={handleClick} />
        </div>
        <div className={styles.row_container}>
          <Card value={state[6]} index={6} handleClick={handleClick} />

          <Card value={state[7]} index={7} handleClick={handleClick} />

          <Card value={state[8]} index={8} handleClick={handleClick} />
        </div>
      </div>
    </>
  );
}

export default Board;
