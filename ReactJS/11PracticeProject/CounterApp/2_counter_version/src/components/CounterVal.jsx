import React from "react";
import { useContext } from "react";
import CounterContext from "../store/CounterContext";

function CounterVal() {
  const { counterVal } = useContext(CounterContext);
  return (
    <h2 className="text-2xl font-semibold text-violet-500 my-2">
      Counter Value : {counterVal}
    </h2>
  );
}

export default CounterVal;
