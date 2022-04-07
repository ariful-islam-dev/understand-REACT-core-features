import PropTypes from "prop-types";
import React from "react";
const TextInput = (props) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        className="form-control"
        type={props.type}
        name={props.name}
        id={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
TextInput.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
};

export default TextInput;
