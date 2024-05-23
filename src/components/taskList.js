import React from "react";
import Task from "./Task";
// import "./taskList.css";

const TaskList = ({ todos, onDeleted }) => {
  const elements = todos.map((item) => {
    return (
      <Task
        key={item.id}
        id={item.id}
        label={item.label}
        onDeleted={() => onDeleted(item.id)}
      ></Task>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
