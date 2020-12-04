import React from "react";
import {
  Typography,
  // Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";

const AppointmentTable = ({ loading, error, data }) => {
  if (loading) return <Typography>Loading ...</Typography>;
  if (error) return <Typography>Error ...</Typography>;
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Pet</TableCell>
              <TableCell>AppointmentType</TableCell>
              <TableCell>AppointmentStatus</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.appointments.map((row) => (
              <TableRow key={row.pet}>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell>{row.owner.name}</TableCell>
                <TableCell>{row.doctor.name}</TableCell>
                <TableCell>{row.pet.name}</TableCell>
                <TableCell>{row.appointmentType}</TableCell>
                <TableCell>{row.appointmentStatus}</TableCell>
                {/* <TableCell>
                  <Button variant="outlined" color="primary">
                    Edit
                  </Button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AppointmentTable;
