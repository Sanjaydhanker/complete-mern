import React from "react";

function Display() {
  return (
    <section>
      <input
        className="border text-4xl p-2 text-right w-full rounded outline-none mb-4"
        type="text"
        readOnly
        value="0"
      />
    </section>
  );
}

export default Display;
