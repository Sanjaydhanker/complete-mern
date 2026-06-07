import React from "react";
import { useRef, useState } from "react";
import TodoContext from "./TodoContext";

function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([
    { todoName: "Learn React", todoDate: "10/06/2026" },
    { todoName: "Start Project", todoDate: "10/06/2026" },
    { todoName: "Complete Project", todoDate: "15/06/2026" },
  ]);

  const todoNameElement = useRef("");
  const todoDateElement = useRef("");

  const handleAddButton = (e) => {
    e.preventDefault();

    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;

    if (todoName === "" || todoDate === "")
      return alert("Enter todo name and date");

    const newTodo = { todoName, todoDate };
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    todoDateElement.current.value = "";
    todoNameElement.current.value = "";
  };

  const handleDeleteBtn = (item) => {
    const newTodoList = todos.filter((list) => list != item);
    setTodos(newTodoList);
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        todoDateElement,
        todoNameElement,
        handleAddButton,
        handleDeleteBtn,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
