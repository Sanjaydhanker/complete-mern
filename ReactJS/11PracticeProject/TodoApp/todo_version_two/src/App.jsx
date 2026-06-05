import AddTodo from "./components/AddTodo";
import Container from "./components/Container";
import TodoList from "./components/TodoList";

function App() {
  const todos = [
    { todoName: "Learn React", todoDate: "05/06/2026" },
    { todoName: "Eat healthy", todoDate: "05/06/2026" },
  ];

  return (
    <Container>
      <AddTodo />
      <TodoList todoList={todos} />
    </Container>
  );
}

export default App;
