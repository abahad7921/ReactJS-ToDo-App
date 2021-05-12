import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState(["Dummy Task"]);
  const [input, setInput] = useState("");

  // const addTodo = (event) => {
  //   //this will fire off when we click add to do
  // }

  function addTodo(event) {
    console.log("add todo working");
    setTodos([...todos, input]);
  }

  return (
    <div className="App">
      <h1>React Todo App ✅</h1>
      <h2>Start adding your work!</h2>
      <form>
        <input
          placeholder="write a task"
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
        <button onClick={addTodo}>Add Task</button>
      </form>
      <ul>
        {todos.map(function (todo) {
          return <li style={{ listStyle: "none" }}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
