import React from "react";

function CreatePost() {
  return (
    <div className="w-full flex justify-center">
      <form
        action=""
        className="max-w-md min-w-sm rounded bg-indigo-200 border flex flex-col p-8 gap-y-4"
      >
        <h1 className="text-2xl font-semibold font-serif text-center ">
          Create Post
        </h1>
        <input
          className=" p-2 rounded border outline-none "
          type="text"
          placeholder="username"
        />
        <input
          className="p-2 rounded border outline-none "
          type="text"
          placeholder="username"
        />
        <button className="  rounded p-2 text-white bg-green-500 hover:bg-green-600 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
