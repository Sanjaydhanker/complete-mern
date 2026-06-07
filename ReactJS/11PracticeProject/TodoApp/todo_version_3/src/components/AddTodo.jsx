import React from "react";

function AddTodo({
  handleTodoChange,
  todoName,
  todoDate,
  handleDateChange,
  handleAddButton,
}) {
  return (
    <div className="flex items-center gap-4 flex-wrap my-2">
      <section className="flex-3 ">
        <input
          className="border p-2 rounded w-full outline-none"
          placeholder="Enter Todo"
          type="text"
          value={todoName}
          onChange={handleTodoChange}
        />
      </section>
      <section className="flex-2">
        <input
          className="border p-2 rounded w-full outline-none"
          type="date"
          value={todoDate}
          onChange={handleDateChange}
        />
      </section>
      <section className="flex-1">
        <button
          className="w-full p-2 rounded text-white bg-green-600"
          onClick={handleAddButton}
        >
          Add
        </button>
      </section>
    </div>
  );
}

export default AddTodo;
