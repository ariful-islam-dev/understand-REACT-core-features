import React, { Component } from "react";
import "./app.style.css";

class App extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div className="App">
        <h1>Why do we need state</h1>
        <h2>Count = {this.state.count}</h2>

        <button
          onClick={() => {
            this.setState((prev) => {
              return { count: prev.count + 1 };
            }, ()=>{
              console.log("Clicked...", this.state.count);
            });
           
          }}
        >
          ADD +1
        </button>
      </div>
    );
  }
}

export default App;
