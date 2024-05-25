import React from "react";
import { Component } from "react";
import NewTaskForm from "./NewTaskForm";

class AppHeader extends Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onItemAdded={this.props.onItemAdded}></NewTaskForm>
      </header>
    );
  }
}

export default AppHeader;
