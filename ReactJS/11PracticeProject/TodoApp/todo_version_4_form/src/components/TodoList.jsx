import React from "react";
import TodoItems from "./TodoItems";

function TodoList({ todoList, handleDeleteBtn }) {
  return (
    <>
      {todoList.map((item) => (
        <TodoItems
          key={item.todoName}
          handleDeleteBtn={handleDeleteBtn}
          item={item}
        />
      ))}
    </>
  );
}

export default TodoList;
