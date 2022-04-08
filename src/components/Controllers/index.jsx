import PropTypes from "prop-types";
import React from "react";
import { Col, Row } from "reactstrap";
import BulkController from "./Bult-Controller";
import FilterController from "./Filter-contorller";
import SearchPanel from "./Search-Panel";
import ViewController from "./View-Controller";

const Controller = ({
  searchTerm,
  handleSearch,
  toggleForm,
  handleFilter,
  view,
  changeView,
  clearSelected,
  clearCompleted,
  reset,
}) => {
  return (
    <div>
      <SearchPanel
        term={searchTerm}
        handleSearch={handleSearch}
        toggleForm={toggleForm}
      />
      <Row className="my-4">
        <Col md={{ size: 4 }}>
          <FilterController handleFilter={handleFilter} />
        </Col>
        <Col md={{ size: 4 }}>
          <ViewController view={view} changeView={changeView} />
        </Col>

        <Col md={{ size: 4 }} className="d-flex">
          <div className="ms-auto">
            <BulkController
              clearCompleted={clearCompleted}
              clearSelected={clearSelected}
              reset={reset}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

Controller.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
export default Controller;
