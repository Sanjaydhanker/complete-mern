import React from "react";

function Container({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800">
      <div className="max-w-xl p-8 border bg-slate-300 shadow-2xl rounded-2xl">
        {children}
      </div>
    </div>
  );
}

export default Container;
