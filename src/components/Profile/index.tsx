import React, { Component } from "react";
import Bio from "./Bio";
import Links from "./Links";
import "./profile.style.css";
import Skills from "./Skills";

class Profile extends Component {
  me = {
    name: "Ariful Islam",
    title: "Fullstack Javascript Frontend Web developer",
    skillA: "Java",
    skillB: "Javascript",
    skillC: "Python",
  };
  render() {
    return (
      <div className="container">
        <Bio name={this.me.name} title={this.me.title} />
        <Skills {...this.me} />
        <Links />
      </div>
    );
  }
}

export default Profile;
