import { useState } from "react";

function App() {
  const [countVal, setCountVal] = useState(0);

  const increaseVal = () => {
    if (countVal === 25) {
      alert("Value is too high");
      setCountVal(countVal);
    } else {
      setCountVal(countVal + 1);
    }
  };

  const decreaseVal = () => {
    if (countVal === 0) {
      alert("Value is low");
      setCountVal(countVal);
    } else {
      setCountVal(countVal - 1);
    }
  };

  return (
    <>
      <div className="h-screen w-full bg-slate-800 flex items-center justify-center">
        <div className="w-sm  border rounded-2xl p-6 text-center bg-indigo-300">
          <h1 className="text-2xl font-bold text-indigo-800 ">
            Counter Project
          </h1>
          <p className="text-xl font-semibold my-2">
            Conter Value : {countVal}
          </p>
          <button
            className="border p-2 rounded-xl bg-indigo-700 text-white hover:bg-indigo-600 cursor-pointer m-2"
            onClick={increaseVal}
          >
            Increase Value
          </button>
          <button
            className="border p-2 rounded-xl bg-indigo-700 text-white hover:bg-indigo-600 cursor-pointer"
            onClick={decreaseVal}
          >
            Decrease Value
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
