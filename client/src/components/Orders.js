import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Orders = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Orders for {user.username}</h1>
    </div>
  );
};

export default Orders;
