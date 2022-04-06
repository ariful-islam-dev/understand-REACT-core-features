import React, { Component } from "react";

class Inputs extends Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthDay: "",
    gender: "",
    agree: false,
    skills: [],
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
  handleSkillChange = (e) => {
    if (e.target.checked) {
      this.setState({
        skills: [...this.state.skills, e.target.value],
      });
    } else {
      const skills = this.state.skills.filter(
        (skill) => skill !== e.target.value
      );
      this.setState({
        skills,
      });
    }
  };
  render() {
    const { name, country, bio, birthDay, agree, skills } = this.state;
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
          <h3>Skills:</h3>
          <input
            type="checkbox"
            name="skills"
            value="Java"
            checked={skills.includes("Java")}
            onChange={this.handleSkillChange}
          />{" "}
          Java
          <input
            type="checkbox"
            name="skills"
            value="Javascript"
            checked={skills.includes("Javascript")}
            onChange={this.handleSkillChange}
          />{" "}
          Javascript
          <input
            type="checkbox"
            name="skills"
            value="GoLang"
            checked={skills.includes("GoLang")}
            onChange={this.handleSkillChange}
          />{" "}
          GoLang
          <input
            type="checkbox"
            name="skills"
            value="Python"
            checked={skills.includes("Python")}
            onChange={this.handleSkillChange}
          />{" "}
          Python
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
