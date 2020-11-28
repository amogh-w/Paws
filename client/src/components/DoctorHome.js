import React from "react";
import { Typography, Button } from "@material-ui/core";

const DoctorHome = ({ user, setLoggedIn }) => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <img src={user.photo} style={{ width: "50px" }} alt="Profile" />
        <Typography variant="h4">{user.name}</Typography>
      </div>
      <div style={{ textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log("Schedule Appointment")}
          style={{ marginRight: "20px" }}
        >
          Schedule Appointment
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setLoggedIn(false)}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default DoctorHome;
