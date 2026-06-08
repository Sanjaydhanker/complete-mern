import React from "react";

function AppContainer({ children }) {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-800 text-center ">
      <div className="p-6 rounded-2xl shadow bg-slate-300 min-w-sm">
        {children}
      </div>
    </div>
  );
}

export default AppContainer;
