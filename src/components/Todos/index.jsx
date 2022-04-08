import React from "react";
import ListView from "../List-View";
import TableView from "../Table-View";
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
  };

  toggleSelect = (todoId) => {};
  toggleComplete = (todoId) => {};
  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5"> Stack Todos</h1>
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
      </div>
    );
  }
}

export default Todos;
