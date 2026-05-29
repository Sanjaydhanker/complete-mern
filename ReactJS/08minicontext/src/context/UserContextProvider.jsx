import React, { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const myViews = Math.floor(Math.random() * 1000);

  const [data, setData] = useState("");
  return (
    <UserContext.Provider value={{ myViews, data, setData }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
