import React from "react";
import CounterContext from "./CounterContext";
import { useState } from "react";

function CounterContextProvider({ children }) {
  const [counterVal, setCounterVal] = useState(0);
  const handleIncreamentBtn = () => {
    setCounterVal((prev) => prev + 1);
  };
  const handleDecreamentBtn = () => {
    setCounterVal((prev) => prev - 1);
  };

  return (
    <CounterContext.Provider
      value={{ counterVal, handleIncreamentBtn, handleDecreamentBtn }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;
