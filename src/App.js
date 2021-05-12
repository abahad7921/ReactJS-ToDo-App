import "./styles.css";
import React, { useState } from "react";

export default function App() {
  function inputChangeHandler(event) {
    console.log(event.target.value);
    setTask(event.target.value);
  }

  const [todos, setTodos] = useState(["Dummy Task"]);
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <h1>React Todo App</h1>
      <h2>Start adding your work!</h2>

      <input placeholder="write a task" onChange={inputChangeHandler} />
      <button>Add Task</button>
      <ul>
        {todos.map(function (todo) {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
