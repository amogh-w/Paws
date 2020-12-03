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

const ReviewTable = ({ loading, error, data }) => {
  if (loading) return <Typography>Loading ...</Typography>;
  if (error) return <Typography>Error ...</Typography>;
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Rating</TableCell>
              <TableCell>Feedback</TableCell>
              <TableCell>OwnerId</TableCell>
              <TableCell>DoctorId</TableCell>
              <TableCell>PetId</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.reviews.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.rating}
                </TableCell>
                <TableCell>{row.feedback}</TableCell>
                <TableCell>{row.ownerId}</TableCell>
                <TableCell>{row.doctorId}</TableCell>
                <TableCell>{row.petId}</TableCell>
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

export default ReviewTable;
