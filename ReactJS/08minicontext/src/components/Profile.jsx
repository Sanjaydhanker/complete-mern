import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { data } = useContext(UserContext);

  return (
    <h1>
      UserName is :{data.user} User Pass Is :{data.pass}
    </h1>
  );
}

export default Profile;
