import React, { useState, useCallback, useEffect } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
} from "@material-ui/core";
import FileUpload from "../components/FileUpload";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { useQuery, useMutation, gql } from "@apollo/client";

const GET_OWNERS = gql`
  {
    owners {
      id
      username
      password
      name
      photo
      address
      dob
      age
      phone
    }
  }
`;

const ADD_OWNER = gql`
  mutation addOwner(
    $username: String!
    $password: String!
    $name: String!
    $photo: String!
    $address: String!
    $dob: String!
    $age: Float!
    $phone: String!
  ) {
    addOwner(
      username: $username
      password: $password
      name: $name
      photo: $photo
      address: $address
      dob: $dob
      age: $age
      phone: $phone
    ) {
      id
    }
  }
`;

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
  const [showRegistration, setShowRegistration] = useState(false);
  const [photoFile, photoFileHandle] = useState([]);

  const handlePhotoFileChange = useCallback(
    (e) => photoFileHandle(e.target.files[0]),
    []
  );

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const attachPhoto = () => {
    toBase64(photoFile).then((res) => {
      setRegistrationValues({ ...registrationValues, photo: res });
    });
  };

  const { loading, error, data } = useQuery(GET_OWNERS);
  const [addOwner, { data2 }] = useMutation(ADD_OWNER);

  const Submit = (e) => {
    e.preventDefault();
    console.log(registrationValues);
    console.log(data);
    addOwner({
      variables: {
        username: registrationValues.username,
        password: registrationValues.password,
        name: registrationValues.name,
        photo: registrationValues.photo,
        address: registrationValues.address,
        dob: registrationValues.dob,
        age: parseFloat(registrationValues.age),
        phone: registrationValues.phone,
      },
    });
  };

  // name: String,
  // photo: String,
  // address: String,
  // dob: String,
  // age: Number,
  // phone: String,

  const [registrationValues, setRegistrationValues] = useState({
    username: "",
    password: "",
    name: "",
    photo: "",
    address: "",
    dob: "",
    age: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setRegistrationValues({ ...registrationValues, [name]: value });
  };

  const validateLogin = () => {
    for (var i = 0; i < data.owners.length; i++) {
      if (
        values.username === data.owners[i].username &&
        values.password === data.owners[i].password
      ) {
        setLoggedIn(true);
        return;
      }
    }

    if (loggedIn === false) {
      alert("Error! User not Found.");
    }
  };

  return (
    <div>
      <Paper style={{ margin: "20px", padding: "20px" }}>
        {!loggedIn ? (
          <div>
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
              <Button
                variant="contained"
                color="primary"
                onClick={validateLogin}
              >
                Login
              </Button>
            </div>
            <Divider style={{ margin: "20px" }} />
            <div style={{ textAlign: "center" }}>
              {!showRegistration ? (
                <div>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setShowRegistration(true)}
                  >
                    Register
                  </Button>
                </div>
              ) : (
                <div>
                  <TextField
                    name="username"
                    value={registrationValues.username}
                    onChange={handleInputChange2}
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    rowsMax={4}
                    style={{ width: "50vw" }}
                  />
                  <TextField
                    name="password"
                    value={registrationValues.password}
                    onChange={handleInputChange2}
                    label="Password"
                    margin="normal"
                    variant="outlined"
                    rowsMax={4}
                    style={{ width: "50vw" }}
                  />
                  <TextField
                    name="name"
                    value={registrationValues.name}
                    onChange={handleInputChange2}
                    label="Name"
                    margin="normal"
                    variant="outlined"
                    rowsMax={4}
                    style={{ width: "50vw" }}
                  />
                  <FileUpload
                    file={photoFile}
                    handleFileChange={handlePhotoFileChange}
                  />
                  <Button variant="outlined" onClick={attachPhoto}>
                    Attach Photo
                  </Button>
                  <br />
                  <TextField
                    name="address"
                    value={registrationValues.address}
                    onChange={handleInputChange2}
                    label="Address"
                    margin="normal"
                    variant="outlined"
                    rowsMax={4}
                    style={{ width: "50vw" }}
                  />
                  <TextField
                    name="dob"
                    value={registrationValues.dob}
                    onChange={handleInputChange2}
                    label="Date of Birth"
                    margin="normal"
                    variant="outlined"
                    rowsMax={4}
                    style={{ width: "50vw" }}
                  />
                  <TextField
                    name="age"
                    value={registrationValues.age}
                    onChange={handleInputChange2}
                    label="Age"
                    margin="normal"
                    variant="outlined"
                    rowsMax={4}
                    style={{ width: "50vw" }}
                  />
                  <TextField
                    name="phone"
                    value={registrationValues.phone}
                    onChange={handleInputChange2}
                    label="Phone"
                    margin="normal"
                    variant="outlined"
                    rowsMax={4}
                    style={{ width: "50vw" }}
                  />
                  <br />
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={Submit}
                  >
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setShowRegistration(false)}
                    style={{ marginLeft: "20px" }}
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </div>
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
