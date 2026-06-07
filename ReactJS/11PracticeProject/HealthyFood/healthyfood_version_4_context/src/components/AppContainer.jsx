import React from "react";

function AppContainer({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-90">{children}</div>
    </div>
  );
}

export default AppContainer;
