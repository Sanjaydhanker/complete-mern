import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="h-screen w-full flex items-baseline-last justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="bg-white p-2 rounded flex flex-wrap items-center justify-center mb-10 gap-3">
          <button
            className="rounded py-2 px-5 bg-red-500 text-white"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="rounded py-2 px-5 bg-yellow-500 text-white"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="rounded py-2 px-5 bg-green-500 text-white"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="rounded py-2 px-5 bg-purple-500 text-white"
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="rounded py-2 px-5 bg-gray-500 text-white"
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
          <button
            className="rounded py-2 px-5 bg-orange-500 text-white"
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="rounded py-2 px-5 bg-pink-500 text-white"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="rounded py-2 px-5 bg-indigo-500 text-white"
            onClick={() => setColor("indigo")}
          >
            Indigo
          </button>
          <button
            className="rounded py-2 px-5 bg-blue-500 text-white"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="rounded py-2 px-5 bg-violet-500 text-white"
            onClick={() => setColor("violet")}
          >
            Violet
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
