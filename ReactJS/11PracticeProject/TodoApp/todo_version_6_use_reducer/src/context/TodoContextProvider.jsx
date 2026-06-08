import React, { useReducer } from "react";
import { useRef } from "react";
import TodoContext from "./TodoContext";

const todosReducer = (currentTodo, action) => {
  let newTodoList = currentTodo;
  if (action.type === "ADD_TODO") {
    const newTodo = {
      todoName: action.payload.todoName,
      todoDate: action.payload.todoDate,
    };
    newTodoList = [...currentTodo, newTodo];
  } else if (action.type === "DELETE_TODO") {
    newTodoList = currentTodo.filter((list) => list != action.payload.item);
  }
  return newTodoList;
};

function TodoContextProvider({ children }) {
  // const [todos, setTodos] = useState([
  //   { todoName: "Learn React", todoDate: "10/06/2026" },
  // ]);

  const [todos, dispatchTodos] = useReducer(todosReducer, []);

  const todoNameElement = useRef("");
  const todoDateElement = useRef("");

  const handleAddButton = (e) => {
    e.preventDefault();

    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;

    if (todoName === "" || todoDate === "")
      return alert("Enter todo name and date");

    const addNewTodo = {
      type: "ADD_TODO",
      payload: {
        todoName,
        todoDate,
      },
    };
    dispatchTodos(addNewTodo);
    todoDateElement.current.value = "";
    todoNameElement.current.value = "";
  };

  const handleDeleteBtn = (item) => {
    const deleteTodo = {
      type: "DELETE_TODO",
      payload: {
        item,
      },
    };
    dispatchTodos(deleteTodo);
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
