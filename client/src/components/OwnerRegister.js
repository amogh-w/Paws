import React, { useState, useCallback } from "react";
import { TextField, Button } from "@material-ui/core";

import FileUpload from "./FileUpload";

import { ADD_OWNER } from "../queries/queries";
import { useMutation } from "@apollo/client";

const OwnerRegister = ({ setShowRegistration }) => {
  const [addOwner, { data }] = useMutation(ADD_OWNER);

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

  const [photoFile, photoFileHandle] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationValues({ ...registrationValues, [name]: value });
  };

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
      console.log(res.length);
      setRegistrationValues({ ...registrationValues, photo: res });
    });
  };

  const Submit = (e) => {
    e.preventDefault();
    console.log(registrationValues);
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
      <TextField
        name="name"
        value={registrationValues.name}
        onChange={handleInputChange}
        label="Name"
        margin="normal"
        variant="outlined"
        rowsMax={4}
        style={{ width: "50vw" }}
      />
      <FileUpload file={photoFile} handleFileChange={handlePhotoFileChange} />
      <Button variant="outlined" onClick={attachPhoto}>
        Attach Photo
      </Button>
      <br />
      <TextField
        name="address"
        value={registrationValues.address}
        onChange={handleInputChange}
        label="Address"
        margin="normal"
        variant="outlined"
        rowsMax={4}
        style={{ width: "50vw" }}
      />
      <TextField
        name="dob"
        value={registrationValues.dob}
        onChange={handleInputChange}
        label="Date of Birth"
        margin="normal"
        variant="outlined"
        rowsMax={4}
        style={{ width: "50vw" }}
      />
      <TextField
        name="age"
        value={registrationValues.age}
        onChange={handleInputChange}
        label="Age"
        margin="normal"
        variant="outlined"
        rowsMax={4}
        style={{ width: "50vw" }}
      />
      <TextField
        name="phone"
        value={registrationValues.phone}
        onChange={handleInputChange}
        label="Phone"
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

export default OwnerRegister;
