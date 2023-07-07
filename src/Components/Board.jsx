import React from "react";

function Board() {
  return (
    <div className={StyleSheet.container}>
      <div className={StyleSheet.row_container}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={StyleSheet.row_container}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={StyleSheet.row_container}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Board;
