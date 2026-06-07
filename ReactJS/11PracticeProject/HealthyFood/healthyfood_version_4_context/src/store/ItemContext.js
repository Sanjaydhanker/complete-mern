import { createContext } from "react";

const ItemContext = createContext({
  foodItems: [],
  handleAddButton: () => {},
  handleDeleteButton: () => {},
  inputValueElement: "",
});

export default ItemContext;
