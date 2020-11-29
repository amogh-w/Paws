import React, { useState} from "react";
import { TextField, Button } from "@material-ui/core";

import { ADD_ADMIN } from "../queries/queries";
import { useMutation } from "@apollo/client";

const AdminRegister = ({ setShowRegistration }) => {
  const [addAdmin, { data }] = useMutation(ADD_ADMIN);

  const [registrationValues, setRegistrationValues] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationValues({ ...registrationValues, [name]: value });
  };

  const Submit = (e) => {
    e.preventDefault();
    console.log(registrationValues);
    addAdmin({
      variables: {
        username: registrationValues.username,
        password: registrationValues.password,
      },
    });
    console.log(data);
  };

  return (
    <div>
      <TextField
        name="username"
        value={registrationValues.username}
        onChange={handleInputChange}
        label="Username"
        margin="normal"
        variant="outlined"
        rowsMax={4}
        style={{ width: "50vw" }}
      />
      <TextField
        name="password"
        value={registrationValues.password}
        onChange={handleInputChange}
        label="Password"
        margin="normal"
        variant="outlined"
        rowsMax={4}
        style={{ width: "50vw" }}
      />
      <br />
      <Button variant="contained" color="secondary" onClick={Submit}>
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
  );
};

export default AdminRegister;
