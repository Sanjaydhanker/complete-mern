import React from "react";

function Card({ post }) {
  return (
    <div className="relative min-w-sm max-w-lg p-8 border border-gray-100 bg-black shadow-xl rounded-xl">
      <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
        {post.rating}
      </span>

      <div className="mt-4 text-gray-200 sm:pr-8">
        <h5 className="mt-4 text-xl font-bold text-gray-300">{post.title}</h5>

        <p className="mt-2 text-sm">{post.message}</p>
      </div>
    </div>
  );
}

export default Card;
