import React, { Component } from "react";
import "./app.style.css";
import BoxA from "./box_A";
import BoxB from "./box_B";

class App extends Component {
  myHeader = {
    color: "blue",
    fontWight: 300,
    fontFamily: "Arial",
    fontSize: "36px",
  };
  render() {
    return (
      <div>
        <h1 style={this.myHeader}>How to Style React App</h1>
        <h1
          style={{
            color: "blue",
            fontWight: 300,
            fontFamily: "Arial",
            fontSize: "36px",
          }}
        >
          Another Header Tag
        </h1>
        <button>Click Me</button>
        <BoxA />
        <BoxB />
      </div>
    );
  }
}

export default App;
