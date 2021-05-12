import "./styles.css";
import React, { useState } from "react";

export default function App() {
  function inputChangeHandler(event) {
    console.log(event.target.value);
    setTask(event.target.value);
  }

  const [task, setTask] = useState([]);

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <h2>Start adding your work!</h2>

      <input placeholder="write a task" onChange={inputChangeHandler}></input>

      <button>Add Task</button>
      <button>Delete Task</button>
      <ul>{<li>{task}</li>}</ul>
    </div>
  );
}
