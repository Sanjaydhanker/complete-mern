import React from "react";

function SideBar({ selectedTab, setSelectedTab }) {
  return (
    <div className="w-44 h-screen bg-slate-700 fixed mt-16">
      <ul className="items-stretch space-y-3 mt-8">
        <li className="flex">
          <a
            href="#"
            className={`flex items-center w-full rounded py-2 px-4 text-gray-200 ${selectedTab === "Home" && "bg-gray-500"}`}
            onClick={() => setSelectedTab("Home")}
          >
            Home
          </a>
        </li>
        <li className="flex">
          <a
            href="#"
            className={`flex items-center w-full rounded py-2 px-4  text-gray-200 ${selectedTab === "Create Post" && "bg-gray-500"}`}
            onClick={() => setSelectedTab("Create Post")}
          >
            Create Post
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
