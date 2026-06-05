import React from "react";

function FoodList({ foodList }) {
  return (
    <ul className="space-y-2">
      {foodList.map((item) => (
        <li key={item} className="bg-green-100 p-3 rounded-md">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default FoodList;
