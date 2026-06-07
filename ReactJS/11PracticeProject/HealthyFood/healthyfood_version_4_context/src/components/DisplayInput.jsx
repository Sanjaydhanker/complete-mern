import React from "react";
import { useContext } from "react";
import { useState } from "react";
import ItemContext from "../store/ItemContext";

function DisplayInput() {
  const { handleAddButton, inputValueElement } = useContext(ItemContext);
  return (
    <div className="flex items-center justify-between border rounded my-3">
      <input
        ref={inputValueElement}
        className="w-full rounded outline-none px-2"
        type="text"
        placeholder="Enter food item"
      />
      <button
        className="py-2 px-4 rounded bg-green-500 text-white"
        onClick={handleAddButton}
      >
        Add
      </button>
    </div>
  );
}

export default DisplayInput;
