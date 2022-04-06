import React from "react";

const Button = (props) => (
  <button className="buttonA" {...props}>
    {props.children}
  </button>
);

export default Button;
