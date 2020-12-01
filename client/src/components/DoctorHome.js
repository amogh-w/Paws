import React from "react";
import { Typography, Button } from "@material-ui/core";
import ReviewTable from "./ReviewTable";

import { useQuery } from "@apollo/client";

import { GET_APPOINTMENTS_DOCTOR, GET_REVIEWS } from "../queries/queries";
import AppointmentTable from "./AppointmentTable";

const DoctorHome = ({ user, setLoggedIn }) => {
  const { loading, error, data } = useQuery(GET_APPOINTMENTS_DOCTOR, {
    variables: { doctorId: user.id },
  });

  const { loading: loading3, error: error3, data: data3 } = useQuery(
    GET_REVIEWS,
    {
      variables: { doctorId: user.doctorId },
    }
  );

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <img src={user.photo} style={{ width: "50px" }} alt="Profile" />
        <Typography variant="h4">{user.name}</Typography>
      </div>
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
          onClick={() => setLoggedIn(false)}
        >
          Sign Out
        </Button>
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5">Your Appointments</Typography>
      </div>
      <AppointmentTable loading={loading} error={error} data={data} />
      <br />
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5">Your Reviews</Typography>
      </div>
      <br />
      <ReviewTable loading={loading3} error={error3} data={data3} />
    </div>
  );
};

export default DoctorHome;
