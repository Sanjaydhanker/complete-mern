import React from "react";

function Buttons({ buttons }) {
  return (
    <section className="flex flex-wrap gap-2 mx-4 justify-between">
      {buttons.map((num) => (
        <button className="size-14 rounded-full bg-gray-600 hover:bg-gray-700 text-white">
          {num}
        </button>
      ))}
    </section>
  );
}

export default Buttons;
