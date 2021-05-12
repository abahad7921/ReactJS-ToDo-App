import "./styles.css";
import React, { useState } from "react";
import { Button } from "@material-ui/core";

export default function App() {
  const [todos, setTodos] = useState(["Dummy Task"]);
  const [input, setInput] = useState("");

  // const addTodo = (event) => {
  //   //this will fire off when we click add to do
  // }

  function addTodo(event) {
    //   console.log("add todo working");
    event.preventDefault(); //this function will stop the refresh
    setTodos([...todos, input]);
    setInput("");
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

        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Task
        </Button>
      </form>
      <ul>
        {todos.map(function (todo) {
          return <li style={{ listStyle: "none" }}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
