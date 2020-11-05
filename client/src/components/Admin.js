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

function createData2(doctor, location, phone) {
  return { doctor, location, phone };
}

const rows2 = [createData2("Abhijeet Welankar", "Mumbai", "987654321")];

function createData3(owner, pet, phone) {
  return { owner, pet, phone };
}

const rows3 = [createData3("Aninet Pasthe", "Dog", "987654321")];

const Admin = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateLogin = () => {
    if (values.username === "admin" && values.password === "admin") {
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
            <Typography variant="h5">Admin Login</Typography>
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
              <Typography variant="h5">Scheduled Appointments</Typography>
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
            <div style={{ textAlign: "center" }}>
              <Typography variant="h5">Registered Doctors</Typography>
            </div>
            <br />
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Doctor</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows2.map((row) => (
                    <TableRow key={row.doctor}>
                      <TableCell component="th" scope="row">
                        {row.doctor}
                      </TableCell>
                      <TableCell>{row.location}</TableCell>
                      <TableCell>{row.phone}</TableCell>
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
            <div style={{ textAlign: "center" }}>
              <Typography variant="h5">Registered Owners</Typography>
            </div>
            <br />
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Owner</TableCell>
                    <TableCell>Pet</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows3.map((row) => (
                    <TableRow key={row.owner}>
                      <TableCell component="th" scope="row">
                        {row.owner}
                      </TableCell>
                      <TableCell>{row.pet}</TableCell>
                      <TableCell>{row.phone}</TableCell>
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

export default Admin;
