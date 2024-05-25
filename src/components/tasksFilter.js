import React, { Component } from "react";
import "./tasksFilter.css";

class TasksFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "completed", label: "Completed" },
  ];
  render() {
    const { activeTab, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = activeTab === name;
      const buttonClass = isActive ? "selected" : "btn";
      return (
        <li key={name}>
          {" "}
          <button className={buttonClass} onClick={() => onFilterChange(name)}>
            {label}
          </button>{" "}
        </li>
      );
    });
    return <ul className="filters">{buttons}</ul>;
  }
}

export default TasksFilter;
