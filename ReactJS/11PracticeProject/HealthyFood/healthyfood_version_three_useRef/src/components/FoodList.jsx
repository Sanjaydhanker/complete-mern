import React from "react";

function FoodList({ foodList, handleDeleteButton }) {
  return (
    <ul className="space-y-2">
      {foodList.map((item) => {
        return (
          <div
            key={item}
            className="flex bg-green-100 justify-between p-1 rounded-md items-center"
          >
            <li className="px-2">{item}</li>
            <button
              className="py-2 rounded px-2 bg-red-500 text-white"
              onClick={() => handleDeleteButton(item)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </ul>
  );
}

export default FoodList;
