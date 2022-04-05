import React, { Component } from "react";
import Profile from "./Profile";
import MyProps from "./Props";

class App extends Component {
  render() {
    const style = { marginTop: "30px", marginBottom: "30px" };
    return (
      <div className="App">
        <Profile />
        <div style={style}>
          <h3 style={{ marginBottom: "20px" }}>List of Programms</h3>
          <MyProps name="Ariful Islam Raju" />
          <MyProps name="Aysha Mone" />
          <MyProps name="Abdullah Al Zarif" />
        </div>
      </div>
    );
  }
}

export default App;
