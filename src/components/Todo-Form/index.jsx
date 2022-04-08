import PropTypes from "prop-types";
import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class TodoForm extends React.Component {
  state = {
    text: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state);

    event.target.reset();
    this.setState({ text: "", description: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Enter Task</Label>
          <Input
            placeholder="Do some text"
            name="text"
            value={this.state.text}
            onchange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Describe Task</Label>
          <Input
            placeholder="Task Description"
            name="description"
            type="textarea"
            value={this.state.description}
            onchange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit">Create Task</Button>
      </Form>
    );
  }
}
TodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default TodoForm;
