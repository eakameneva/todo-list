import React from "react";
import Task from "./Task";
// import "./taskList.css";

const TaskList = ({
  todos,
  onDeleted,
  onEdit,
  onEditFormSubmit,
  onToggleDone,
}) => {
  const elements = todos.map((item) => {
    return (
      <Task
        key={item.id}
        id={item.id}
        createdAt={item.createdAt}
        label={item.label}
        condition={item.condition}
        onDeleted={onDeleted}
        onEdit={onEdit}
        onEditFormSubmit={onEditFormSubmit}
        onToggleDone={onToggleDone}
      ></Task>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
