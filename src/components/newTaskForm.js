import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import "./NewTaskForm.css";

class NewTaskForm extends Component {
  state = {
    label: "",
  };
  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onLabelChange}
          value={this.state.label}
        ></input>
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func,
};

export default NewTaskForm;
