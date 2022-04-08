import PropTypes from "prop-types";
import React from "react";
import { Button, Input, ListGroupItem } from "reactstrap";

// list item Component
const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <ListGroupItem className="d-flex align-items-center" check>
      <Input
        type="checkbox"
        id={todo.isSelect}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />

      <div className="mx-3">
        <h4>{todo.text}</h4>
        <p>{todo.time.toDateString()}</p>
      </div>
      <Button
        className="ms-auto"
        color={todo.isComplete ? "danger" : "success"}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? "Completed" : "Running"}
      </Button>
    </ListGroupItem>
  );
};

ListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};
export default ListItem;
