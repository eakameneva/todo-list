import React from "react";
import Task from "./task";
// import "./taskList.css";

const TaskList = ({ todos }) => {
  const elements = todos.map((item) => {
    return <Task key={item.id} label={item.label} state={item.state}></Task>;
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
