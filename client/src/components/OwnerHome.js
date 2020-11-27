import React, { useState } from "react";
import {
  Typography,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";
import Pet from "./Pet";

import { useQuery } from "@apollo/client";
import { GET_PETS } from "../queries/queries";

const OwnerHome = ({ user, setLoggedIn }) => {
  const [showAddPet, setShowAddPet] = useState(false);

  const { data } = useQuery(GET_PETS);

  let pets;

  if (data) {
    pets = data.pets.filter(function (e) {
      return e.ownerId === user.id;
    });
  }

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
      <br />
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5">Your Pets</Typography>
      </div>
      <br />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Breed</TableCell>
              <TableCell>Height</TableCell>
              <TableCell>Weight</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pets.map((row) => (
              <TableRow key={row.pet}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>
                  <img
                    src={row.photo}
                    alt="pet-image"
                    style={{ width: "5vw" }}
                  />
                </TableCell>
                <TableCell>{row.age} years</TableCell>
                <TableCell>{row.breed}</TableCell>
                <TableCell>{row.height} cm</TableCell>
                <TableCell>{row.weight} cm</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OwnerHome;
