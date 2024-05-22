import React from "react";
import "./task.css";
import NewTaskForm from "./newTaskForm";

const Task = (props) => {
  const getClassName = (state) => {
    switch (state) {
      case "completed":
        return "completed";
      case "editing":
        return "editing";
      default:
        return "normal";
    }
  };

  return (
    <li className={getClassName(props.state)}>
      <div className="view">
        <input className="toggle" type="checkbox"></input>
        <label>
          <span className="description">{props.label}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      {props.state === "editing" && <NewTaskForm />}
    </li>
  );
};

export default Task;
