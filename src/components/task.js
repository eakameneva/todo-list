import React from "react";
import { Component } from "react";
import EditForm from "./EditForm";
import "./Task.css";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

class Task extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.forceUpdate(), 60000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <li className={this.props.condition}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.condition === "completed"}
            onChange={() => this.props.onToggleDone(this.props.id)}
          ></input>
          <label>
            <span className="description">{this.props.label}</span>
            <span className="created">
              created {formatDistanceToNow(this.props.createdAt)} ago
            </span>
          </label>
          <button
            className="icon icon-edit"
            onClick={() => this.props.onEdit(this.props.id)}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={() => this.props.onDeleted(this.props.id)}
          ></button>
        </div>
        {this.props.condition === "editing" && (
          <EditForm
            onEditFormSubmit={this.props.onEditFormSubmit}
            id={this.props.id}
          ></EditForm>
        )}
      </li>
    );
  }
}

Task.propTypes = {
  condition: PropTypes.string,
  onToggleDone: PropTypes.func,
  id: PropTypes.number,
  label: PropTypes.string,
  createdAt: PropTypes.number,
  onEditFormSubmit: PropTypes.func,
};

Task.defaultProps = {
  createdAt: Date.now(),
};

export default Task;
