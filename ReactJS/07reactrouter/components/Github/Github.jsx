import React, { useEffect, useState } from "react";

function Github() {
  const [myData, setMyData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/Sanjaydhanker")
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
      });
  }, []);

  return (
    <div className="text-2xl text-orange-700 bg-gray-400 font-semibold p-4 text-center">
      My github repo:{myData.public_repos}
      <img src={myData.avtar_url} alt="" />
    </div>
  );
}

export default Github;
