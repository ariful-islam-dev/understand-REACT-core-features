import React, { Component } from "react";
import Profile from "./Profile";
import Bio from "./Profile/Bio";
import Skills from "./Profile/Skills";
import MyProps from "./Props";

class Child extends Component<{ func: Function }> {
  render() {
    this.props.func(this);

    return <h1>I am Child</h1>;
  }
}
class App extends Component {
  getContext(context: any) {
    console.log(context);
  }
  render() {
    this.getContext(this);
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
        <Child func={this.getContext} />
      </div>
    );
  }
}

export default App;
