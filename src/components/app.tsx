import React, { Component } from "react";

class App extends Component {
  render() {
    const obj: Object = {
      title: "Test Title",
      id: "myh1",
    };

    const name: String = "Ariful Islam Raju";
    const bio = (
      <div>
        <h3>{name}</h3>
        <p>Fullstack Javascript Developer</p>
      </div>
    );
    return (
      <div className="App">
        <h1 {...obj}>My name is {name}</h1>
        <h2>what is JSX</h2>
        <p>JSX is Awesome and it's mean Javascript Extention</p>
        <p>{new Date().toISOString()}</p>
        {bio}
      </div>
    );
  }
}

export default App;
