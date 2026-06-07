import React from "react";
import { useRef, useState } from "react";
import ItemContext from "./ItemContext";

function ItemContextProvider({ children }) {
  const [foodItems, setFoodItems] = useState(["Apple", "Banana", "Guava"]);

  const inputValueElement = useRef("");

  const handleAddButton = () => {
    const inputVal = inputValueElement.current.value;
    if (inputVal == "") return alert("Please enter foodItem");
    const newFoodList = [...foodItems, inputVal];
    setFoodItems(newFoodList);
    inputValueElement.current.value = "";
  };

  const handleDeleteButton = (item) => {
    const newFoodItems = foodItems.filter((food) => food != item);
    setFoodItems(newFoodItems);
  };

  return (
    <ItemContext.Provider
      value={{
        foodItems,
        handleAddButton,
        handleDeleteButton,
        inputValueElement,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}

export default ItemContextProvider;
