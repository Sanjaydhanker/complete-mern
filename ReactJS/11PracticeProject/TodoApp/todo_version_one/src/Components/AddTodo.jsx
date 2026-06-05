import React from "react";

function AddTodo() {
  return (
    <div className="flex items-center justify-between gap-4 mb-3">
      <input
        className="flex-3 border border-black outline-none p-2 rounded"
        placeholder="Enter Todo"
        type="text"
      />
      <input
        className="flex-3 border border-black outline-none p-2 rounded"
        type="date"
      />
      <button className="flex-2 bg-indigo-600 text-white rounded p-2 cursor-pointer hover:bg-indigo-700  w-full">
        Add
      </button>
    </div>
  );
}

export default AddTodo;
