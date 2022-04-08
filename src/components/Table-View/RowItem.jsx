import PropTypes from "prop-types";
import React from "react";
import { Button, Input } from "reactstrap";

const RowItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <tr>
      <th scope="row">
        <Input
          type="checkbox"
          id={todo.id}
          checked={todo.isSelect}
          onChange={() => toggleSelect(todo.id)}
        />
      </th>
      <th>{todo.time.toDateString()}</th>
      <th>{todo.text}</th>
      <th>
        <Button
          color={todo.isComplete ? "danger" : "success"}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.isComplete ? "Completed" : "Running"}
        </Button>
      </th>
    </tr>
  );
};

RowItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};

export default RowItem;
