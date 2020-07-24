import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const Orders = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Orders for {user.username}</h1>
    </div>
  );
};

export default Orders;
