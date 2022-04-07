import React, { Component } from "react";
import Form from "./Form";

class ControlledForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
    event.target.reset();
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        <Form
          values={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default ControlledForm;

/**
 * Index -> State and Logic (submit , change, blur handler and validation)
 * Form ->
 */
