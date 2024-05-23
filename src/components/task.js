import React, { Component } from "react";
import "./task.css";
import NewTaskForm from "./NewTaskForm";

class Task extends Component {
  onLabelClick = () => {
    this.setState((state) => {
      if (state.condition === "active")
        return {
          condition: "completed",
        };
      else
        return {
          condition: "active",
        };
    });
  };
  state = {
    condition: "active",
  };

  render() {
    const { label, onDeleted } = this.props;
    const { condition } = this.state;

    const getClassName = (condition) => {
      switch (condition) {
        case "completed":
          return "completed";
        case "editing":
          return "editing";
        default:
          return "active";
      }
    };

    return (
      <li className={getClassName(condition)}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={this.onLabelClick}
          ></input>
          <label>
            <span className="description">{label}</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {condition === "editing" && <NewTaskForm />}
      </li>
    );
  }
}

export default Task;
