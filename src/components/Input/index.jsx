import React, { Component } from "react";

class Inputs extends Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthDay: "",
    gender: "",
    agree: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleCheckBox = (e) => {
    this.setState({
      agree: e.target.checked,
    });
  };
  render() {
    const { name, country, bio, birthDay, agree } = this.state;
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
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={this.handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={this.handleChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={this.handleChange}
          />
          Other
        </div>
        <div>
          <input
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={this.handleCheckBox}
          />{" "}
          I agree to all the terms and condition
        </div>
        <button onClick={() => console.log(this.state)}>Show Data</button>
      </div>
    );
  }
}

export default Inputs;
