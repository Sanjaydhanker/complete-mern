import React from "react";
import { useContext } from "react";
import ItemContext from "../store/ItemContext";

function ErrorMessage() {
  const { foodItems } = useContext(ItemContext);
  return (
    foodItems.length == 0 && (
      <div className="text-2xl font-bold text-center">I am still hungry.</div>
    )
  );
}

export default ErrorMessage;
