import React from "react";
import { Component } from "react";
import NewTaskForm from "./NewTaskForm";
import PropTypes from "prop-types";
import "./AppHeader.css";

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
AppHeader.propTypes = {
  onItemAdded: PropTypes.func,
};

export default AppHeader;
