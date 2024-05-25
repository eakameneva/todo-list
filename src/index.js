import React from "react";
import ReactDOM from "react-dom/client";
import AppHeader from "./components/AppHeader";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import { Component } from "react";
import "./index.css";

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

class App extends Component {
  maxId = 4;
  state = {
    todoData: [
      { label: "First task", id: 1, condition: "active" },
      { label: "Editing task", id: 2, condition: "editing" },
      { label: "Third task", id: 3, condition: "active" },
    ],
    tab: "all",
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter((item) => {
        return item.id !== id;
      });
      return {
        todoData: newArray,
      };
    });
  };
  addItem = (text) => {
    const newItem = {
      label: text,
      id: this.maxId++,
      condition: "active",
    };
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const newArray = todoData.map((item) => {
        if (id !== item.id) return item;

        if (item.condition === "active") {
          return { ...item, condition: "completed" };
        }

        return { ...item, condition: "active" };
      });
      return {
        todoData: newArray,
      };
    });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter((item) => {
        return item.condition !== "completed";
      });
      return {
        todoData: newArray,
      };
    });
  };

  onFilterChange = (tab) => {
    this.setState({
      tab: tab,
    });
  };

  filter(items, tab) {
    switch (tab) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => {
          return item.condition === "active";
        });
      case "completed":
        return items.filter((item) => {
          return item.condition === "completed";
        });
      default:
        return items;
    }
  }

  render() {
    const todoCount = this.state.todoData.filter((item) => {
      return item.condition === "active";
    }).length;
    const visibleItems = this.filter(this.state.todoData, this.state.tab);
    return (
      <div className="todoapp">
        <section className="main">
          <AppHeader onItemAdded={this.addItem} />
          <TaskList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
          />
          <Footer
            todo={todoCount}
            onClearCompleted={this.clearCompleted}
            activeTab={this.state.tab}
            onFilterChange={this.onFilterChange}
          />
        </section>
      </div>
    );
  }
}

root.render(<App></App>);
