import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import { GET_DOCTORS, ADD_REVIEW } from "../queries/queries";
import { useQuery, useMutation } from "@apollo/client";

const OwnerReview = ({ ownerId }) => {
  const [values, setValues] = useState({
    rating: 0,
    feedback: "",
    ownerId: ownerId,
    doctorId: "",
    petId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const { loading: loadingDoc, error: errorDoc, data: dataDoc } = useQuery(
    GET_DOCTORS
  );

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
            return <MenuItem value={doc.id}>{doc.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    );
  };

  const [addReview, { data }] = useMutation(ADD_REVIEW);

  const Submit = (e) => {
    e.preventDefault();
    addReview({
      variables: {
        rating: parseFloat(values.rating),
        feedback: values.feedback,
        ownerId: values.ownerId,
        doctorId: values.doctorId,
        petId: values.petId,
      },
    });
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5">Login</Typography>
        <DocSelect
          loadingDoc={loadingDoc}
          errorDoc={errorDoc}
          dataDoc={dataDoc}
        />
        <TextField
          name="rating"
          value={values.rating}
          onChange={handleInputChange}
          label="Rating from 1-worst to 5-best"
          margin="normal"
          variant="outlined"
          rowsMax={4}
          style={{ width: "50vw" }}
        />
        <TextField
          name="feedback"
          value={values.feedback}
          onChange={handleInputChange}
          label="Feedback Text"
          margin="normal"
          variant="outlined"
          rowsMax={4}
          style={{ width: "50vw" }}
        />
        <br />
        <Button variant="contained" color="primary" onClick={Submit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default OwnerReview;
