import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  const { setData } = useContext(UserContext);

  const handleOnClick = (e) => {
    e.preventDefault();
    setData({ pass, user });
    setPass("");
    setUser("");
  };
  return (
    <div className="px-4 py-6 w-sm bg-indigo-400  rounded-2xl text-center">
      <h2 className="text-2xl font-semibold font-serif mb-3">Login page</h2>
      <input
        type="text"
        value={user}
        className="w-full bg-amber-50 outline-none rounded p-2 my-3"
        placeholder="Username"
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        value={pass}
        className="w-full bg-amber-50 outline-none rounded p-2 my-3"
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />
      <button
        className="mt-3 p-2 bg-green-600 text-white w-full hover:bg-green-700 cursor-pointer"
        onClick={handleOnClick}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
