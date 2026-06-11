import React from "react";

function Navbar() {
  return (
    <header className="bg-indigo-400 text-coolGray-800 w-full px-4 fixed top-0 z-10">
      <div className="container flex justify-between h-16 mx-auto ">
        <a
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2 text-2xl font-bold text-indigo-700"
        >
          Social Media
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              href="#"
              className="flex items-center px-4 text-gray-200 hover:text-indigo-700"
            >
              Home
            </a>
          </li>
          <li className="flex">
            <a
              href="#"
              className="flex items-center px-4 text-gray-200 hover:text-indigo-700"
            >
              About
            </a>
          </li>
          <li className="flex">
            <a
              href="#"
              className="flex items-center px-4 text-gray-200 hover:text-indigo-700"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="items-center hidden gap-x-4 lg:flex">
          <button className="self-center px-6 py-2 rounded border hover:text-indigo-600">
            Sign in
          </button>
          <button className="self-center px-6 py-2 font-semibold rounded bg-blue-600 text-white hover:bg-blue-700">
            Sign up
          </button>
        </div>

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
