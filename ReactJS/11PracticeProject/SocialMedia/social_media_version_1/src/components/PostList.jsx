import React, { useState } from "react";
import Card from "./Card";

function PostList() {
  const [userPosts, setUserPosts] = useState([
    {
      title: "Go to College",
      rating: 4.3,
      message: "I am going to college",
    },
    {
      title: "Learn ReactJS",
      rating: 4.3,
      message: "I am Learning ReactJS",
    },
  ]);

  return (
    <div className="flex flex-wrap justify-evenly items-center">
      {userPosts.map((post) => {
        return <Card post={post} key={post.title} />;
      })}
    </div>
  );
}

export default PostList;
