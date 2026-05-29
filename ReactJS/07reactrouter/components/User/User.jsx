import React from "react";
import { useParams } from "react-router";

function User() {
  const { id } = useParams();
  return (
    <div className="text-center txet-2xl font-bold text-orange-700 my-5">
      User:{id}
    </div>
  );
}

export default User;
