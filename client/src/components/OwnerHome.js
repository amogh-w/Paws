import React from "react";
import { Typography } from "@material-ui/core";

const OwnerHome = ({ user }) => {
  return (
    <div>
      <Typography>Welcome, {user.name}</Typography>
    </div>
  );
};

export default OwnerHome;
