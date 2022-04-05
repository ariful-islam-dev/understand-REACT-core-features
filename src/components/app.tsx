import React, { Component } from "react";
import Profile from "./Profile";
import Skills from "./Profile/Skills";

class App extends Component {
  render() {
    const style = { marginTop: "30px", marginBottom: "30px" };
    return (
      <div className="App">
        <Profile />
        <div style={style}>
          <h3 style={{ marginBottom: "20px" }}>List of Programms</h3>
          <h4>Mr. X</h4>
          <Skills />

          <h4>Mr. Y</h4>
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;
