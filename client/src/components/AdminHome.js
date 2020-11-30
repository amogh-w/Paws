import React from "react";
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

import { useQuery } from "@apollo/client";
import { GET_DOCTORS, GET_OWNERS, GET_APPOINTMENTS } from "../queries/queries";

import AppointmentTable from "./AppointmentTable";

const ShowDoctorTable = ({ loading, error, data }) => {
  if (loading) return <Typography>Loading ...</Typography>;
  if (error) return <Typography>Error ...</Typography>;
  return (
    <TableBody>
      {data.doctors.map((row) => (
        <TableRow key={row.pet}>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell>
            <img src={row.photo} alt="doctor-face" style={{ width: "5vw" }} />
          </TableCell>
          <TableCell>{row.address}</TableCell>
          <TableCell>{row.dob}</TableCell>
          <TableCell>{row.age} years</TableCell>
          <TableCell>{row.phone}</TableCell>
          <TableCell>{row.clinicAddress}</TableCell>
          <TableCell>{row.clinicCity}</TableCell>
          <TableCell>{row.experience}</TableCell>
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

const ShowOwnerTable = ({ loading, error, data }) => {
  if (loading) return <Typography>Loading ...</Typography>;
  if (error) return <Typography>Error ...</Typography>;
  return (
    <TableBody>
      {data.owners.map((row) => (
        <TableRow key={row.pet}>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell>
            <img src={row.photo} alt="pet-face" style={{ width: "5vw" }} />
          </TableCell>
          <TableCell>{row.address}</TableCell>
          <TableCell>{row.dob}</TableCell>
          <TableCell>{row.age} years</TableCell>
          <TableCell>{row.phone}</TableCell>
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

const AdminHome = ({ user, setLoggedIn }) => {
  const { loading, error, data } = useQuery(GET_DOCTORS, {
    variables: { ownerId: user.id },
  });

  const { loading: loading2, error: error2, data: data2 } = useQuery(
    GET_OWNERS,
    {
      variables: { ownerId: user.id },
    }
  );

  const { loading: loading3, error: error3, data: data3 } = useQuery(
    GET_APPOINTMENTS
  );

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4">Admin Panel</Typography>
      </div>
      <div style={{ textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setLoggedIn(false)}
        >
          Sign Out
        </Button>
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5">Doctors Database</Typography>
      </div>
      <br />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Clinic Address</TableCell>
              <TableCell>Clinic City</TableCell>
              <TableCell>Experience</TableCell>
            </TableRow>
          </TableHead>
          <ShowDoctorTable loading={loading} error={error} data={data} />
        </Table>
      </TableContainer>
      <br />
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5">Owners Database</Typography>
      </div>
      <br />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <ShowOwnerTable loading={loading2} error={error2} data={data2} />
        </Table>
      </TableContainer>
      <br />
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5">Appointment Database</Typography>
      </div>
      <br />
      <AppointmentTable loading={loading3} error={error3} data={data3} />
    </div>
  );
};

export default AdminHome;
