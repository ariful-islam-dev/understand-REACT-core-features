import React, { Component } from "react";
import Form from "./Form";

const initValue = {
  name: "",
  email: "",
  password: "",
  birthDate: "",
  gender: "",
};
class SignupForm extends Component {
  state = {
    values: initValue,
    agreement: false,
  };
  handleChange = (event) => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleAgreement = (e) => {
    this.setState({
      agreement: e.target.checked,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.values, this.state.agreement);

    e.target.reset();
    this.setState({ values: initValue, agreement: false });
  };
  render() {
    return (
      <div>
        <Form
          values={this.state.values}
          handleAgreement={this.handleAgreement}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          agreement={this.state.agreement}
        />
      </div>
    );
  }
}

export default SignupForm;
