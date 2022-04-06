import React, { Component } from "react";
import classes from "./app.module.css";

class App extends Component {
  state = {
    name: "",
  };
  handleButtonClick = (event) => {
    console.log(event.target);
    console.log("I am a cute lettle button");
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div className={classes.Wrapper}>
        <h1 className={classes.Heading}>Events in React</h1>
        <button onClick={this.handleButtonClick} className={classes.Btn}>
          Click Me
        </button>
        <br />
        <input
          className={classes.TextField}
          type="text"
          name=""
          id=""
          value={this.state.name}
          placeholder="Enter some text"
          onChange={this.handleChange}
        />
        <br />
        <br />
        {this.state.name && <h3>Welcome, {this.state.name}</h3>}
      </div>
    );
  }
}

export default App;
