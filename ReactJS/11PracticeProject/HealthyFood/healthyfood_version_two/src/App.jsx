import { useState } from "react";
import AppContainer from "./components/AppContainer";
import AppName from "./components/AppName";
import DisplayInput from "./components/DisplayInput";
import ErrorMessage from "./components/ErrorMessage";
import FoodList from "./components/FoodList";

function App() {
  const [foolItems, setFoodItems] = useState(["Apple", "Banana", "Guava"]);

  const [inputVal, setInputVal] = useState("");

  const handleOnChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleAddButton = () => {
    if (inputVal == "") return alert("Please enter foodItem");
    const newFoodList = [...foolItems, inputVal];
    setFoodItems(newFoodList);
    setInputVal("");
  };

  const handleDeleteButton = (item) => {
    const newFoodItems = foolItems.filter((food) => food != item);
    setFoodItems(newFoodItems);
  };

  return (
    <AppContainer>
      <AppName />
      <DisplayInput
        handleAddButton={handleAddButton}
        inputVal={inputVal}
        handleOnChange={handleOnChange}
      />
      {foolItems.length === 0 && <ErrorMessage />}
      <FoodList foodList={foolItems} handleDeleteButton={handleDeleteButton} />
    </AppContainer>
  );
}

export default App;

// const myFood = [];

// if (myFood.length === 0) {
//   return <h2>I am Still hungry</h2>;
// }

// let empty = myFood.length === 0 ? <h2>I am Still hungry</h2> : null;
