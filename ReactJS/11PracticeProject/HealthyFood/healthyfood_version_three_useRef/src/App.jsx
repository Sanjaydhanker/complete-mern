import { useRef, useState } from "react";
import AppContainer from "./components/AppContainer";
import AppName from "./components/AppName";
import DisplayInput from "./components/DisplayInput";
import ErrorMessage from "./components/ErrorMessage";
import FoodList from "./components/FoodList";

function App() {
  const [foolItems, setFoodItems] = useState(["Apple", "Banana", "Guava"]);

  // const [inputVal, setInputVal] = useState("");
  const inputValueElement = useRef("");

  // const handleOnChange = (e) => {
  //   setInputVal(e.target.value);
  // };

  const handleAddButton = () => {
    const inputVal = inputValueElement.current.value;
    if (inputVal == "") return alert("Please enter foodItem");
    const newFoodList = [...foolItems, inputVal];
    setFoodItems(newFoodList);
    inputValueElement.current.value = "";
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
        inputValueElement={inputValueElement}
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
