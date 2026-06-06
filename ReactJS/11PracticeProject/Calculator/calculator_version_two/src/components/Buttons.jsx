import React from "react";

function Buttons({ buttons, handleClickButton }) {
  return (
    <section className="flex flex-wrap gap-2 mx-4 justify-between">
      {buttons.map((num) => (
        <button
          key={num}
          className="size-14 rounded-full bg-gray-600 hover:bg-gray-700 text-white cursor-pointer "
          onClick={() => handleClickButton(num)}
        >
          {num}
        </button>
      ))}
    </section>
  );
}

export default Buttons;
