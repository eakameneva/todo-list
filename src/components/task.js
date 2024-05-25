import React from "react";
import "./task.css";

const Task = ({ label, onDeleted, id, onToggleDone, condition }) => {
  return (
    <li className={condition}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={condition === "completed"}
          onChange={() => onToggleDone(id)}
        ></input>
        <label>
          <span className="description">{label}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button
          className="icon icon-destroy"
          onClick={() => onDeleted(id)}
        ></button>
      </div>
      {condition === "editing" && (
        <input type="text" className="edit" defaultValue="Editing"></input>
      )}
    </li>
  );
};

export default Task;
