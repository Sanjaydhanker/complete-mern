import React from "react";

function AppContainer({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800">
      <div className="max-w-sm p-8 bg-slate-400 rounded-2xl">{children}</div>
    </div>
  );
}

export default AppContainer;
