import AppContainer from "./components/AppContainer";
import AppName from "./components/AppName";
import DisplayInput from "./components/DisplayInput";
import ErrorMessage from "./components/ErrorMessage";
import FoodList from "./components/FoodList";
import ItemContextProvider from "./store/ItemContextProvider";

function App() {
  return (
    <ItemContextProvider>
      <AppContainer>
        <AppName />
        <DisplayInput />
        <ErrorMessage />
        <FoodList />
      </AppContainer>
    </ItemContextProvider>
  );
}

export default App;

// const myFood = [];

// if (myFood.length === 0) {
//   return <h2>I am Still hungry</h2>;
// }

// let empty = myFood.length === 0 ? <h2>I am Still hungry</h2> : null;
