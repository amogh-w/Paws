import React, { useState } from "react";
import { Paper, Typography, TextField, Button } from "@material-ui/core";

const Pet = () => {
  const [values, setValues] = useState({
    pet: "",
    name: "",
    breed: "",
    height: "",
    weight: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <Paper style={{ margin: "20px", padding: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h5">Add your Pet</Typography>
          <TextField
            name="pet"
            value={values.pet}
            onChange={handleInputChange}
            label="Pet"
            margin="normal"
            variant="outlined"
            rowsMax={4}
            style={{ width: "50vw" }}
          />
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
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log(values)}
          >
            Add
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Pet;
