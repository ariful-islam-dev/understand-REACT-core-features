import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import shortId from "shortid";
import Controller from "../Controllers";
import ListView from "../List-View";
import TableView from "../Table-View";
import TodoForm from "../Todo-Form";
class Todos extends React.Component {
  state = {
    todos: [
      {
        id: "abcaoe19203a",
        text: "Main Todo title",
        description: "A simple description of this todo",
        time: new Date(),
        isComplete: false,
        isSelect: true,
      },
      {
        id: "abcaoe194803a",
        text: "Simple Todo title",
        description: "A simple description of this todo",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "abcaoe19445e",
        text: "New Task title",
        description: "A simple description of this todo",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
    isOpenTodoForm: false,
    searchTerm: "",
    view: "list",
    filter: "all",
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;
    this.setState({ todos });
  };
  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;
    this.setState({ todos });
  };
  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };
  handleSearch = (value) => {
    this.setState({ searchTerm: value });
  };
  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  createTodo = (todo) => {
    todo.id = shortId.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };

  handleFilter = (value) => {
    this.setState({
      filter: value,
    });
  };
  performFilter = (todos) => {
    const { filter } = this.state;
    if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === "running") {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };
  // view,
  changeView = (event) => {
    this.setState({
      view: event.target.value,
    });
  };
  clearSelected = () => {};
  clearCompleted = () => {};
  reset = () => {};

  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === "list" ? (
      <div>
        <ListView
          todos={todos}
          toggleComplete={this.toggleComplete}
          toggleSelect={this.toggleSelect}
        />
      </div>
    ) : (
      <div>
        <TableView
          todos={todos}
          toggleComplete={this.toggleComplete}
          toggleSelect={this.toggleSelect}
        />
      </div>
    );
  };
  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5"> Stack Todos</h1>
        <Controller
          searchTerm={this.state.searchTerm}
          view={this.state.view}
          toggleForm={this.toggleForm}
          handleSearch={this.handleSearch}
          handleFilter={this.handleFilter}
          changeView={this.changeView}
          clearSelected={this.clearSelected}
          clearCompleted={this.clearCompleted}
          reset={this.reset}
          filter={this.state.filter}
        />
        {this.getView()}
        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>
            Create new todo Item
          </ModalHeader>
          <ModalBody>
            <TodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Todos;
