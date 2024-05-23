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
  state = {
    todoData: [
      { label: "First task", id: 1 },
      { label: "Editing task", id: 2 },
      { label: "Third task", id: 3 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };
  render() {
    return (
      <div className="todoapp">
        <section className="main">
          <AppHeader></AppHeader>
          <TaskList todos={this.state.todoData} onDeleted={this.deleteItem} />
          <Footer></Footer>
        </section>
      </div>
    );
  }
}

root.render(<App></App>);
