import React from "react";
import { useContext } from "react";
import CounterContext from "../store/CounterContext";

function Buttons() {
  const { handleDecreamentBtn, handleIncreamentBtn } =
    useContext(CounterContext);
  return (
    <div className="flex justify-evenly">
      <button
        className="bg-green-500 text-white p-2 rounded "
        onClick={handleIncreamentBtn}
      >
        Increament
      </button>
      <button
        className="bg-red-500 text-white p-2 rounded "
        onClick={handleDecreamentBtn}
      >
        Decreament
      </button>
    </div>
  );
}

export default Buttons;
