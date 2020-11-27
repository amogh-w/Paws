import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import Pet from "./Pet";

const OwnerHome = ({ user, setLoggedIn }) => {
  const [showAddPet, setShowAddPet] = useState(false);

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
          onClick={() => setShowAddPet(true)}
          style={{ marginRight: "20px" }}
        >
          Add Pet
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setLoggedIn(false)}
        >
          Sign Out
        </Button>
      </div>

      {showAddPet ? (
        <Pet ownerId={user.id} setShowAddPet={setShowAddPet} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default OwnerHome;
