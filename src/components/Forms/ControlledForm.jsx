import React, { Component } from "react";

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
    const { name, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            type="text"
            name="name"
            value={name}
            placeholder="Type your name"
            onChange={this.handleChange}
          />
          <input
            className="form-control"
            type="email"
            name="email"
            value={email}
            placeholder="example@gmail.com"
            onChange={this.handleChange}
          />
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            placeholder="*******************"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ControlledForm;
