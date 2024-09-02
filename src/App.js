import logo from "./logo.svg";
import "./App.css";
import Header from "./Mycomponents/Header";
import Todos from "./Mycomponents/Todos";
import AddTodos from "./Mycomponents/AddTodos";
import Footer from "./Mycomponents/Footer";
import About from "./Mycomponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // Initialize todos from localStorage if available
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    // console.log("I am on delete of todo", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    // console.log("I am adding this todo", title, desc);
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  return (
    <>
      <Router>
        <Header title="My Todos List" searchbar={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodos addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
