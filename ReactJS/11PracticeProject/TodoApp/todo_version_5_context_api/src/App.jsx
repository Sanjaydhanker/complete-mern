import AddTodo from "./components/AddTodo";
import Container from "./components/Container";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./context/TodoContextProvider";

function App() {
  return (
    <TodoContextProvider>
      <Container>
        <AddTodo />
        <TodoList />
      </Container>
    </TodoContextProvider>
  );
}

export default App;

// for useState

// const [todoName, setTodoName] = useState("");
// const [todoDate, setTodoDate] = useState("");

// const handleTodoChange = (e) => {
//   setTodoName(e.target.value);
// };
// const handleDateChange = (e) => {
//   setTodoDate(e.target.value);
// };

// without useState
