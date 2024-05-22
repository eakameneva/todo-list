import React from "react";
import ReactDOM from "react-dom/client";
import AppHeader from "./components/appHeader";
import TaskList from "./components/taskList";
import Footer from "./components/footer";
import { Component } from "react";
import "./index.css";

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

class App extends Component {
  state = {
    todoData: [
      { label: "Completed task", id: 1, state: "completed" },
      { label: "Editing task", id: 2, state: "editing" },
      { label: "Active task", id: 3, state: "normal" },
    ],
  };

  // deleteItem = (id) => {
  //   this.setState(({ todoData }) => {
  //     const indx = todoData.findIndex((el) => el.id === id);
  //     const newArray = [
  //       ...todoData.splice(0, indx),
  //       ...todoData.splice(indx + 1),
  //     ];

  //     return {
  //       todoData: newArray,
  //     };
  //   });
  // };
  render() {
    return (
      <div className="todoapp">
        <section className="main">
          <AppHeader></AppHeader>
          <TaskList todos={this.state.todoData} />
          <Footer></Footer>
        </section>
      </div>
    );
  }
}

root.render(<App></App>);
