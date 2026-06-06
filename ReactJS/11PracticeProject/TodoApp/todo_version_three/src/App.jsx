import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Container from "./components/Container";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { todoName: "Learn React", todoDate: "10/06/2026" },
    { todoName: "Start Project", todoDate: "10/06/2026" },
    { todoName: "Complete Project", todoDate: "15/06/2026" },
  ]);

  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleTodoChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleDateChange = (e) => {
    setTodoDate(e.target.value);
  };
  const handleAddButton = (e) => {
    if (todoName === "" && todoDate === "")
      return alert("Enter todo name and date");
    const newTodo = { todoName, todoDate };
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    setTodoName("");
    setTodoDate("");
  };

  const handleDeleteBtn = (item) => {
    const newTodoList = todos.filter((list) => list != item);
    setTodos(newTodoList);
  };

  return (
    <Container>
      <AddTodo
        todoName={todoName}
        todoDate={todoDate}
        handleTodoChange={handleTodoChange}
        handleDateChange={handleDateChange}
        handleAddButton={handleAddButton}
      />
      <TodoList todoList={todos} handleDeleteBtn={handleDeleteBtn} />
    </Container>
  );
}

export default App;
