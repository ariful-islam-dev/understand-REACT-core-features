import PropTypes from "prop-types";
import TextInput from "./TextInput";
const Form = (props) => (
  <form onSubmit={props.handleSubmit}>
    <TextInput
      label="Enter Your Name"
      name="name"
      value={props.values.name}
      placeholder="Type your name"
      handleChange={props.handleChange}
    />
    <TextInput
      className="form-control"
      type="email"
      label="Enter Your Email"
      name="email"
      value={props.values.email}
      placeholder="example@gmail.com"
      handleChange={props.handleChange}
    />
    <TextInput
      label="Enter Password"
      className="form-control"
      type="password"
      name="password"
      value={props.values.password}
      placeholder="*******************"
      handleChange={props.handleChange}
    />
    <button type="submit">Submit</button>
  </form>
);

Form.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
