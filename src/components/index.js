import React, { Component } from "react";
import "./app.style.css";

class App extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div className="App">
        <h1>Why do we need state</h1>
        <h2>Count = {this.state.count}</h2>

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          ADD +1
        </button>
      </div>
    );
  }
}

export default App;
