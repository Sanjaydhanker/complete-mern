import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import Item1 from "./Components/Item1";
import Item2 from "./Components/Item2";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="p-8 bg-slate-300 w-lg rounded-2xl">
          <AppName />
          <AddTodo />
          <Item1 />
          <Item2 />
        </div>
      </div>
    </>
  );
}

export default App;
