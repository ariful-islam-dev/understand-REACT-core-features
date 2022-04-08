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
    ],
    isOpenTodoForm: false,
    searchTerm: "",
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
  handleSearch = () => {};

  createTodo = (todo) => {
    todo.id = shortId.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };
  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5"> Stack Todos</h1>
        <Controller
          searchTerm={this.state.searchTerm}
          toggleForm={this.toggleForm}
          handleSearch={this.handleSearch}
        />
        <div>
          <ListView
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            toggleSelect={this.toggleSelect}
          />
        </div>
        <div>
          <TableView
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            toggleSelect={this.toggleSelect}
          />
        </div>
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
