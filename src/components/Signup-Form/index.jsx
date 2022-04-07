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
    errors: {},
  };
  handleChange = (event) => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value,
      },
      errors: {
        ...this.state.errors,
        [event.target.name]: "",
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
    const { isValid, errors } = this.validate();
    if (isValid) {
      console.log(this.state);
      e.target.reset();
      this.setState({ values: initValue, agreement: false, errors: {} });
    } else {
      this.setState({ errors });
    }
  };

  validate = () => {
    const errors = {};
    const {
      values: { name, email, password, gender, birthDate },
    } = this.state;
    if (!name) {
      errors.name = "Please Provide Your Name";
    }

    if (!email) {
      errors.email = "Please Provide Your Email";
    }
    if (!password) {
      errors.password = "Please Provide Your Password";
    }
    if (!birthDate) {
      errors.birthDate = "Please Provide Your birth Date";
    }
    if (!gender) {
      errors.gender = "Please Select Your Gender";
    }

    return { errors, isValid: Object.keys(errors).length === 0 };
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
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default SignupForm;
