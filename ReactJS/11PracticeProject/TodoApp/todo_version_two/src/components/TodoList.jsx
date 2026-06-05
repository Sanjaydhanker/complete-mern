import React from "react";
import TodoItems from "./TodoItems";

function TodoList({ todoList }) {
  return (
    <>
      {todoList.map((item) => (
        <TodoItems key={item.todoName} item={item} />
      ))}
    </>
  );
}

export default TodoList;
