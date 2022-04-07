import PropTypes from "prop-types";
import React from "react";
import TextInput from "./TextInput";

const Form = ({
  values,
  handleSubmit,
  handleChange,
  handleAgreement,
  agreement,
  errors,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        name="name"
        label="Enter Full Name"
        value={values.name}
        error={errors.name}
        placeholder="Your Name"
        handleChange={handleChange}
      />
      <TextInput
        name="email"
        type="email"
        label="Enter Your Email Address"
        value={values.email}
        error={errors.email}
        placeholder="example@gmail.com"
        handleChange={handleChange}
      />
      <TextInput
        name="password"
        type="password"
        label="Enter Valid Password"
        value={values.password}
        error={errors.password}
        placeholder="*********"
        handleChange={handleChange}
      />
      <TextInput
        name="birthDate"
        type="date"
        label="Date of Birth"
        value={values.birthDate}
        error={errors.birthDate}
        placeholder="Date of Birth"
        handleChange={handleChange}
      />
      <div className="input-group mb-3">
        <label htmlFor="" className="me-2">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          />
          Male
        </label>
        <label className="me-2">
          {" "}
          <input
            className="form-check-inputl"
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
          Female
        </label>
        <label className="me-2">
          {" "}
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Other"
            onChange={handleChange}
          />
          Other
        </label>
      </div>
      {errors.gender ?? <div className="invalid-feedback">{errors.gender}</div>}
      <div className="input-group">
        <label htmlFor="agree">
          <input
            className="form-check-input"
            type="checkbox"
            name="agreement"
            id="agree"
            checked={agreement}
            onChange={handleAgreement}
          />
          I Agree all terms
        </label>
      </div>
      <button className="btn btn-primary" type="submit" disabled={!agreement}>
        Signup
      </button>
    </form>
  );
};

Form.propTypes = {
  values: PropTypes.object.isRequired,
  agreement: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAgreement: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
