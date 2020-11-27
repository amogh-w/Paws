import React, { useState, useCallback } from "react";
import { Paper, Typography, TextField, Button } from "@material-ui/core";
import FileUpload from "./FileUpload";

import { ADD_PET } from "../queries/queries";
import { useMutation } from "@apollo/client";

const Pet = ({ ownerId, setShowAddPet }) => {
  const [addPet, { data }] = useMutation(ADD_PET);

  const [values, setValues] = useState({
    name: "",
    photo: "",
    age: "",
    breed: "",
    height: "",
    weight: "",
  });

  const [photoFile, photoFileHandle] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
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
      setValues({ ...values, photo: res });
    });
  };

  const Submit = (e) => {
    e.preventDefault();
    addPet({
      variables: {
        name: values.name,
        photo: values.photo,
        age: parseFloat(values.age),
        breed: values.breed,
        height: parseFloat(values.height),
        weight: parseFloat(values.weight),
        ownerId: ownerId,
      },
    });
    console.log(data);
  };

  return (
    <div>
      <Paper style={{ margin: "20px", padding: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h5">Add your Pet</Typography>
          <TextField
            name="name"
            value={values.name}
            onChange={handleInputChange}
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
          <TextField
            name="age"
            value={values.age}
            onChange={handleInputChange}
            label="Age"
            margin="normal"
            variant="outlined"
            rowsMax={4}
            style={{ width: "50vw" }}
          />
          <TextField
            name="breed"
            value={values.breed}
            onChange={handleInputChange}
            label="Breed"
            margin="normal"
            variant="outlined"
            rowsMax={4}
            style={{ width: "50vw" }}
          />
          <TextField
            name="height"
            value={values.height}
            onChange={handleInputChange}
            label="Height"
            margin="normal"
            variant="outlined"
            rowsMax={4}
            style={{ width: "50vw" }}
          />
          <TextField
            name="weight"
            value={values.weight}
            onChange={handleInputChange}
            label="Weight"
            margin="normal"
            variant="outlined"
            rowsMax={4}
            style={{ width: "50vw" }}
          />
          <br />
          <Button variant="contained" color="primary" onClick={Submit}>
            Add
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setShowAddPet(false)}
            style={{ marginLeft: "20px" }}
          >
            Cancel
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Pet;
