import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import "./EditForm.css";

class EditForm extends Component {
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
    this.props.onEditFormSubmit(this.props.id, this.state.label);
    this.setState({
      label: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="edit"
          placeholder="Editing"
          autoFocus
          onChange={this.onLabelChange}
          value={this.state.label}
        ></input>
      </form>
    );
  }
}

EditForm.propTypes = {
  id: PropTypes.number,
};

export default EditForm;
