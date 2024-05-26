import React from "react";
import { Component } from "react";

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

  //   onSubmit={(event) => onEditFormSubmit(id, event.target.value)}
}

export default EditForm;
