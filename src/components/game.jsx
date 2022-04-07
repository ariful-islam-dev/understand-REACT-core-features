import React, { Component } from "react";
import Board from "./board";

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
  };
  onClick = (i) => {
    console.log(i);
  };
  render() {
    return (
      <div>
        <h1>Game Component</h1>
        <Board onClick={this.onClick} squares={this.state.history[0]} />
      </div>
    );
  }
}

export default Game;
