import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Profile of {user.username}</h1>
    </div>
  );
};

export default Profile;
