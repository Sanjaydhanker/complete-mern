import AppContainer from "./components/AppContainer";
import AppName from "./components/AppName";
import ErrorMessage from "./components/ErrorMessage";
import FoodList from "./components/FoodList";

function App() {
  const myFood = ["Apple", "Banana", "Papaya", "Grapes"];
  // const myFood = [];

  // if (myFood.length === 0) {
  //   return <h2>I am Still hungry</h2>;
  // }

  // let empty = myFood.length === 0 ? <h2>I am Still hungry</h2> : null;
  return (
    <AppContainer>
      <AppName />
      {myFood.length === 0 && <ErrorMessage />}
      <FoodList foodList={myFood} />
    </AppContainer>
  );
}

export default App;
