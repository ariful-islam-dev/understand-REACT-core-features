import React, { Component } from "react";
import Bio from "./Bio";
import Links from "./Links";
import "./profile.style.css";
import Skills from "./Skills";

class Profile extends Component {
  render() {
    return (
      <div className="container">
        <Bio />
        <Skills />
        <Links />
      </div>
    );
  }
}

export default Profile;
