import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Ariful Islam</h1>
        <h2>Hello React Your are awesome</h2>
        {MyFunctionalComponent()}
      </div>
    );
  }
}

export default App;

function MyFunctionalComponent() {
  const name: String = "Ariful Islam";
  return <h1>I am functional Components</h1>;
}

const AnotherfunctionalComponent = () => (
  <h1>I am anouther functonal Component</h1>
);
