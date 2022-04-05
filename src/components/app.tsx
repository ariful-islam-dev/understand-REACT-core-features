import React, { Component } from "react";
import Profile from "./Profile";
import Bio from "./Profile/Bio";
import Skills from "./Profile/Skills";
import MyProps from "./Props";

class App extends Component {
  render() {
    const style = { marginTop: "30px", marginBottom: "30px" };
    return (
      <div className="App">
        <Profile />
        <Bio name="Test User" title="Test title" />
        <div style={style}>
          <h3 style={{ marginBottom: "20px" }}>List of Programms</h3>
          <MyProps name="Ariful Islam Raju" />
          <Skills skillA="React" skillB="Angular" skillC="Vue" />
          <MyProps name="Aysha Mone" />
          <Skills skillA="Node" skillB="Express" skillC="MongoDB" />
          <MyProps name="Abdullah Al Zarif" />
        </div>
      </div>
    );
  }
}

export default App;
