import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
} from "@material-ui/core";
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

function createData2(pet, name, breed, height, weight) {
  return { pet, name, breed, height, weight };
}

const rows2 = [createData2("Dog", "Shiro", "Labrador", "50cm", "30kgs")];

const Owner = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateLogin = () => {
    if (values.username === "owner" && values.password === "owner") {
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
            <Typography variant="h5">Owner Login</Typography>
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
                onClick={() => console.log("Add Pet")}
              >
                Add Pet
              </Button>
            </div>
            <br />
            <Divider style={{ margin: "20px 0px" }} />
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
            <div style={{ textAlign: "center" }}>
              <Typography variant="h5">Your Pets</Typography>
            </div>
            <br />
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Pet</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Breed</TableCell>
                    <TableCell>Height</TableCell>
                    <TableCell>Weight</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows2.map((row) => (
                    <TableRow key={row.pet}>
                      <TableCell component="th" scope="row">
                        {row.pet}
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.breed}</TableCell>
                      <TableCell>{row.height}</TableCell>
                      <TableCell>{row.weight}</TableCell>
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

export default Owner;
