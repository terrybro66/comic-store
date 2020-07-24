import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Profile of {user.username}</h1>
    </div>
  );
};

export default Profile;
