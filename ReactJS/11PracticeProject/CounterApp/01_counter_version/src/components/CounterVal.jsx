import React from "react";

function CounterVal({ counterVal }) {
  return (
    <h2 className="text-2xl font-semibold text-violet-500 my-2">
      Counter Value : {counterVal}
    </h2>
  );
}

export default CounterVal;
