import React, { Component } from "react";
import classes from "./app.module.css";
import SignupForm from "./Signup-Form";

class App extends Component {
  render() {
    return (
      <div className={classes.Wrapper}>
        <h1 className={classes.Heading}>Working with Forms is React</h1>
        <hr />
        {/* <Input /> */}
        {/* <UnControlledForm /> */}
        {/* <ControlledForm /> */}
        <SignupForm />
      </div>
    );
  }
}

export default App;
