import React, { Component } from "react";
import "./profile.style.css";

class Profile extends Component {
  render() {
    return (
      <div className="container">
        <div className="bio">
          <h3>Md Ariful Islam</h3>
          <p>Junior Frontend Web Developer</p>
        </div>
        <div className="skills">
          <h3>Skills:</h3>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </div>
        <div className="links">
          <h3>Social links:</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
