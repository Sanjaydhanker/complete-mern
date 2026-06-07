import React from "react";
import TodoItems from "./TodoItems";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <>
      {todos.map((item) => (
        <TodoItems key={item.todoName} item={item} />
      ))}
    </>
  );
}

export default TodoList;
