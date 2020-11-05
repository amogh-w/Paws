import React, { useState } from "react";
import { Paper, Typography, TextField, Button } from "@material-ui/core";

const Appointment = () => {
  const [values, setValues] = useState({ id: "" });
  const [appointmentFound, setAppointmentFound] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateSearch = () => {
    if (values.id === "1234") {
      setAppointmentFound(true);
    } else {
      alert("Error!");
    }
  };

  return (
    <div>
      <Paper style={{ margin: "20px", padding: "20px" }}>
        {!appointmentFound ? (
          <div style={{ textAlign: "center" }}>
            <Typography variant="h5">Enter Appointment ID Here</Typography>
            <TextField
              name="id"
              value={values.id}
              onChange={handleInputChange}
              label="ID"
              margin="normal"
              variant="outlined"
              rowsMax={4}
              style={{ width: "50vw" }}
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={validateSearch}
            >
              Search
            </Button>
          </div>
        ) : (
          <div>
            <Typography>
              <b>Owner's Name:</b> Aninet Pasthe
              <br />
              <b>Doctor's Name:</b> Abhijeet Welankar
              <br />
              <b>Pet:</b> Abhijeet Welankar
              <br />
              <b>Date:</b> 11-11-2020
              <br />
              <b>Time:</b> 4:00 pm
            </Typography>
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={() => setAppointmentFound(false)}
              style={{ marginRight: "20px" }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setAppointmentFound(false)}
            >
              Back
            </Button>
          </div>
        )}
      </Paper>
    </div>
  );
};

export default Appointment;
