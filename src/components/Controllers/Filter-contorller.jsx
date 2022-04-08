import PropTypes from "prop-types";
import React from "react";
import { Button, ButtonGroup } from "reactstrap";

const FilterController = ({ handleFilter, filter }) => {
  return (
    <ButtonGroup>
      <Button
        onClick={() => handleFilter("all")}
        color={filter === "all" ? "success" : "secondary"}
      >
        All
      </Button>
      <Button
        onClick={() => handleFilter("running")}
        color={filter === "running" ? "success" : "secondary"}
      >
        Running
      </Button>
      <Button
        onClick={() => handleFilter("completed")}
        color={filter === "completed" ? "success" : "secondary"}
      >
        Completed
      </Button>
    </ButtonGroup>
  );
};

FilterController.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default FilterController;
