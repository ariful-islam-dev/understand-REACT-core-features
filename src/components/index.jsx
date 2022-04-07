import React, { Component } from "react";
import classes from "./app.module.css";
import ControlledForm from "./Forms/ControlledForm";

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

  handleFocus = (e) => {
    console.log("I am focus Event");
  };
  handleBlur = (e) => {
    if (!this.state.name) {
      alert("Pleas Enter Your Name");
    }
    console.log("I am blur event");
  };
  render() {
    return (
      <div className={classes.Wrapper}>
        <h1 className={classes.Heading}>Working with Forms is React</h1>
        <hr />
        {/* <Input /> */}
        {/* <UnControlledForm /> */}
        <ControlledForm />
      </div>
    );
  }
}

export default App;
