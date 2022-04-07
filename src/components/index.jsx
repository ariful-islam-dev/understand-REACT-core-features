import React, { Component } from "react";
import classes from "./app.module.css";
import SignupForm from "./Signup-Form";

class App extends Component {
  state = {
    users: [],
  };
  createUser = (user) => {
    user.id = new Date().getTime.toString();
    this.setState({
      users: [...this.state.users, user],
    });
  };
  render() {
    return (
      <div className={classes.Wrapper}>
        <h1 className={classes.Heading}>Working with Forms is React</h1>
        <hr />
        {/* <Input /> */}
        {/* <UnControlledForm /> */}
        {/* <ControlledForm /> */}
        <SignupForm createUser={this.createUser} />
        <div className="my-5">
          <h3>All Registered User</h3>
          <ul className="list-group">
            {this.state.users.map((user, i) => (
              <li key={user.id} className="list-group-item">
                {user.name} -- {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
