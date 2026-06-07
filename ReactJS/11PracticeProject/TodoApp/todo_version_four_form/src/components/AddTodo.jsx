import React from "react";

function AddTodo({ handleAddButton, todoNameElement, todoDateElement }) {
  return (
    <form
      onSubmit={handleAddButton}
      className="flex items-center gap-4 flex-wrap my-2"
    >
      <section className="flex-3 ">
        <input
          ref={todoNameElement}
          className="border p-2 rounded w-full outline-none"
          placeholder="Enter Todo"
          type="text"
        />
      </section>
      <section className="flex-2">
        <input
          ref={todoDateElement}
          className="border p-2 rounded w-full outline-none"
          type="date"
        />
      </section>
      <section className="flex-1">
        <button
          type="submit"
          className="w-full p-2 rounded text-white bg-green-600"
        >
          Add
        </button>
      </section>
    </form>
  );
}

export default AddTodo;
