import "./styles.css";
import React, { useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

export default function App() {
  const [todos, setTodos] = useState([""]);
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

  function deleteTodo() {
    console.log("delete todo function called");
    event.preventDefault();
    //setTodos("");
    setTodos(
      todos.filter(function () {
        todos[0];
      })
    );
    console.log(todos);
    //setTodos("");
  }

  return (
    <div className="App">
      <h1>React Todo App ✅</h1>
      <h2>Start adding your work!</h2>
      <form>
        {/* <input
          style={{
            height: "1.8rem",
            width: "12rem",
            borderRadius: "6px",
            borderColor: "#E5E7EB"
          }}
          placeholder="write a task"
          onChange={(event) => setInput(event.target.value)}
          value={input}
        /> */}
        {/*formControl is basically input alernative from material ui*/}
        <FormControl>
          <InputLabel>Write a task</InputLabel>
          <Input
            placeholder="write a task"
            onChange={(event) => setInput(event.target.value)}
            value={input}
          ></Input>
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Task
        </Button>
        <Button
          type="submit"
          onClick={deleteTodo}
          variant="contained"
          color="primary"
        >
          Delete Task
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
