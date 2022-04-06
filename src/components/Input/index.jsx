import React, { Component } from "react";

class Inputs extends Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthDay: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const { name, country, bio, birthDay } = this.state;
    return (
      <div>
        <input
          className="form-control my-2"
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={this.handleChange}
        />
        <select
          className="form-control my-2"
          name="country"
          value={country}
          onChange={this.handleChange}
        >
          <option>Select Country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Srilanka">Srilanka</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Bhutan">Bhutan</option>
        </select>
        <textarea
          className="form-control my-2"
          name="bio"
          placeholder="Tell me about yourself"
          value={bio}
          onChange={this.handleChange}
        ></textarea>
        <input
          className="form-control my-2"
          type="date"
          name="birthDay"
          value={birthDay}
          onChange={this.handleChange}
        />
        <button onClick={() => console.log(this.state)}>Show Data</button>
      </div>
    );
  }
}

export default Inputs;
