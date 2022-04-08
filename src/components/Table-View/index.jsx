import PropTypes from "prop-types";
import React from "react";
import { Table } from "reactstrap";
import RowItem from "./RowItem";

const TableView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Time</th>
          <th>Todos</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <RowItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            toggleSelect={toggleSelect}
          />
        ))}
      </tbody>
    </Table>
  );
};

TableView.propTypes = {
  todo: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};

export default TableView;
