import React from "react";
import TasksFilter from "./TasksFilter";
import PropTypes from "prop-types";
import "./Footer.css";

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

Footer.propTypes = {
  todo: PropTypes.number,
  onClearCompleted: PropTypes.func,
  activeTab: PropTypes.string,
  onFilterChange: PropTypes.func,
};

export default Footer;
