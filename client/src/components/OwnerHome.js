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
import OwnerAppointment from "./OwnerAppointment";
import AppointmentTable from "./AppointmentTable";
import OwnerReview from "./OwnerReview";

import { useQuery } from "@apollo/client";
import { GET_PETS_OWNER, GET_APPOINTMENTS_OWNER } from "../queries/queries";

const ShowPetTable = ({ loading, error, data }) => {
  if (loading) return <Typography>Loading ...</Typography>;
  if (error) return <Typography>Error ...</Typography>;
  return (
    <TableBody>
      {data.pets.map((row) => (
        <TableRow key={row.pet}>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell>
            <img src={row.photo} alt="pet-face" style={{ width: "5vw" }} />
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
  );
};

const OwnerHome = ({ user, setLoggedIn }) => {
  const [showAddPet, setShowAddPet] = useState(false);
  const [showAddAppointment, setShowAddAppointment] = useState(false);
  const [showAddReview, setShowAddReview] = useState(false);

  const { loading, error, data } = useQuery(GET_PETS_OWNER, {
    variables: { ownerId: user.id },
  });

  const { loading: loading2, error: error2, data: data2 } = useQuery(
    GET_APPOINTMENTS_OWNER,
    {
      variables: { ownerId: user.id },
    }
  );

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
          onClick={() => setShowAddAppointment(true)}
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
      {showAddAppointment ? (
        <OwnerAppointment
          ownerId={user.id}
          setShowAddAppointment={setShowAddAppointment}
        />
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
          <ShowPetTable loading={loading} error={error} data={data} />
        </Table>
      </TableContainer>
      <br />
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5">Your Appointments</Typography>
      </div>
      <AppointmentTable loading={loading2} error={error2} data={data2} />
      <br />
      <Typography>Your Reviews</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowAddReview(true)}
      >
        Add Reviews
      </Button>
      {showAddReview ? <OwnerReview ownerId={user.id} /> : <div></div>}
    </div>
  );
};

export default OwnerHome;
