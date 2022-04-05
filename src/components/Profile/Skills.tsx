import React from "react";

const Skills = (props: any) => (
  <div className="skills">
    <h3>Skills:</h3>
    <ul>
      <li>{props.skillA}</li>
      <li>{props.skillB}</li>
      <li>{props.skillC}</li>
    </ul>
  </div>
);

export default Skills;
