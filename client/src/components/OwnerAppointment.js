import React, { useState } from "react";
import {
  Paper,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  GET_DOCTORS,
  GET_PETS_OWNER,
  ADD_APPOINTMENT,
} from "../queries/queries";
import { useMutation, useQuery } from "@apollo/client";

const OwnerAppointment = ({ ownerId, setShowAddAppointment }) => {
  const [addAppointment, { data }] = useMutation(ADD_APPOINTMENT);

  const [values, setValues] = useState({
    date: new Date(),
    ownerId: ownerId,
    doctorId: "",
    petId: "",
    appointmentType: "",
    appointmentStatus: "Processing",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setValues({ ...values, [name]: value });
  };

  const Submit = (e) => {
    e.preventDefault();
    addAppointment({
      variables: {
        date: values.date,
        ownerId: values.ownerId,
        doctorId: values.doctorId,
        petId: values.petId,
        appointmentType: values.appointmentType,
        appointmentStatus: values.appointmentStatus,
      },
    });
    console.log(data);
  };

  const { loading: loadingDoc, error: errorDoc, data: dataDoc } = useQuery(
    GET_DOCTORS
  );

  const { loading: loadingPet, error: errorPet, data: dataPet } = useQuery(
    GET_PETS_OWNER,
    {
      variables: { ownerId: ownerId },
    }
  );

  const setStartDate = (date0) => {
    setValues({ ...values, date: date0 });
  };

  const DocSelect = ({ loadingDoc, errorDoc, dataDoc }) => {
    if (loadingDoc) return <Typography>Loading ...</Typography>;
    if (errorDoc) return <Typography>Error ...</Typography>;
    console.log(dataDoc.doctors);
    return (
      <FormControl>
        <InputLabel>Doctor</InputLabel>
        <Select
          name="doctorId"
          value={values.doctorId}
          onChange={handleInputChange}
          variant="outlined"
          style={{ width: "50vw", marginBottom: "16px" }}
        >
          {dataDoc.doctors.map((doc) => {
            return (
              <MenuItem value={doc.id}>
                <img
                  src={doc.photo}
                  style={{ width: "100px", padding: "5px" }}
                  alt="Profile"
                />
                {doc.name}, <b>Clinic Location:</b> {doc.clinicAddress}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                  width="300"
                  height="150"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                  title="helo"
                ></iframe>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  };

  const PetSelect = ({ loadingPet, errorPet, dataPet }) => {
    if (loadingPet) return <Typography>Loading ...</Typography>;
    if (errorPet) return <Typography>Error ...</Typography>;
    return (
      <FormControl>
        <InputLabel>Pet</InputLabel>
        <Select
          name="petId"
          value={values.petId}
          onChange={handleInputChange}
          variant="outlined"
          style={{ width: "50vw" }}
        >
          {dataPet.pets.map((pet) => {
            return (
              <MenuItem value={pet.id}>
                <img
                  src={pet.photo}
                  style={{ width: "100px", padding: "5px" }}
                  alt="Profile"
                />
                {pet.name}, <b>Breed:</b> {pet.breed}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  };

  return (
    <div>
      <Paper style={{ margin: "20px", padding: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h5">Schedule your Appointment</Typography>
          <DocSelect
            loadingDoc={loadingDoc}
            errorDoc={errorDoc}
            dataDoc={dataDoc}
          />
          <br />
          <PetSelect
            loadingPet={loadingPet}
            errorPet={errorPet}
            dataPet={dataPet}
          />
          <br />
          <br />
          <Typography>Select Date and Time: </Typography>
          <DatePicker
            selected={values.date}
            onChange={(date0) => setStartDate(date0)}
            showTimeSelect
          />
          <br />
          <br />
          <FormControl>
            <InputLabel>Type</InputLabel>
            <Select
              name="appointmentType"
              value={values.appointmentType}
              onChange={handleInputChange}
              variant="outlined"
              style={{ width: "50vw" }}
            >
              <MenuItem value={"Monthly Checkup"}>Monthly Checkup</MenuItem>
              <MenuItem value={"Emergency"}>Emergency</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <Button variant="contained" color="primary" onClick={Submit}>
            Add
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setShowAddAppointment(false)}
            style={{ marginLeft: "20px" }}
          >
            Cancel
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default OwnerAppointment;
