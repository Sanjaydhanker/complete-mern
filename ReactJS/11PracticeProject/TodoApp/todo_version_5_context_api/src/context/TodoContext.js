import { createContext } from "react";

const TodoContext = createContext({
  todos: [],
  todoDateElement: "",
  todoNameElement: "",
  handleAddButton: () => {},
  handleDeleteBtn: () => {},
});

export default TodoContext;
