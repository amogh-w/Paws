import React, { useState } from "react";
import { Paper, Typography, TextField, Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function createData(owner, doctor, pet, date, time) {
  return { owner, doctor, pet, date, time };
}

const rows = [
  createData(
    "Aninet Pasthe",
    "Abhijeet Welankar",
    "Dog",
    "11-11-2020",
    "4:00 pm"
  ),
  createData(
    "Aninet Pasthe",
    "Abhijeet Welankar",
    "Cat",
    "11-11-2020",
    "4:00 pm"
  ),
];

const Doctor = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateLogin = () => {
    if (values.username === "doctor" && values.password === "doctor") {
      setLoggedIn(true);
    } else {
      alert("Error!");
    }
  };

  return (
    <div>
      <Paper style={{ margin: "20px", padding: "20px" }}>
        {!loggedIn ? (
          <div style={{ textAlign: "center" }}>
            <Typography variant="h5">Doctor Login</Typography>
            <TextField
              name="username"
              value={values.username}
              onChange={handleInputChange}
              label="Username"
              margin="normal"
              variant="outlined"
              rowsMax={4}
              style={{ width: "50vw" }}
            />
            <TextField
              name="password"
              value={values.password}
              onChange={handleInputChange}
              label="Password"
              margin="normal"
              variant="outlined"
              rowsMax={4}
              style={{ width: "50vw" }}
            />
            <br />
            <Button variant="contained" color="primary" onClick={validateLogin}>
              Login
            </Button>
          </div>
        ) : (
          <div>
            <div style={{ textAlign: "center" }}>
              <Typography variant="h5">Your Scheduled Appointments</Typography>
            </div>
            <br />
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Owner</TableCell>
                    <TableCell>Doctor</TableCell>
                    <TableCell>Pet</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.owner}>
                      <TableCell component="th" scope="row">
                        {row.owner}
                      </TableCell>
                      <TableCell>{row.doctor}</TableCell>
                      <TableCell>{row.pet}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.time}</TableCell>
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
            <br />
          </div>
        )}
      </Paper>
    </div>
  );
};

export default Doctor;
