import React from "react";
import TasksFilter from "./TasksFilter";

const Footer = ({ todo, onClearCompleted, activeTab, onFilterChange }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{todo} items left</span>
      <TasksFilter
        activeTab={activeTab}
        onFilterChange={onFilterChange}
      ></TasksFilter>
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
