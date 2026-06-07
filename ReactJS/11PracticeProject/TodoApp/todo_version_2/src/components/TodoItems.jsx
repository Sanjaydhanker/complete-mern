import React from "react";

function TodoItems({ item }) {
  return (
    <div className="flex items-center gap-4 flex-wrap my-2">
      <section className="flex-3 ms-2">
        <h1>{item.todoName}</h1>
      </section>
      <section className="flex-2 ">
        <h1>{item.todoDate}</h1>
      </section>
      <section className="flex-1">
        <button className="w-full p-2 rounded text-white bg-red-600">
          Delete
        </button>
      </section>
    </div>
  );
}

export default TodoItems;
