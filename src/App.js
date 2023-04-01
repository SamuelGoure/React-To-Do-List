import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Forms from "./components/Forms";
import TodosList from "./components/TodosList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false };
    let newTodos = [todo, ...todos];
    console.log(newTodos);
    setTodos(newTodos);
  };
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Forms addTodo={addTodo} />
          {todos.map((todo) => {
            return <TodosList todo={todo} key={todo.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
