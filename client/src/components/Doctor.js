import React, { useState } from "react";
import { Paper, Button, Divider } from "@material-ui/core";

import DoctorHome from "./DoctorHome";
import DoctorRegister from "./DoctorRegister";
import Login from "./Login";

import { useQuery } from "@apollo/client";
import { GET_DOCTORS } from "../queries/queries";

const Doctor = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const { data } = useQuery(GET_DOCTORS);

  const [loggedInUser, setLoggedInUser] = useState({});

  const validateLogin = () => {
    var i;
    for (i = 0; i < data.doctors.length; i++) {
      if (
        values.username === data.doctors[i].username &&
        values.password === data.doctors[i].password
      ) {
        setLoggedInUser(data.doctors[i]);
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
            <Login
              values={values}
              setValues={setValues}
              validateLogin={validateLogin}
            />
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
                <DoctorRegister
                  setValues={setValues}
                  setShowRegistration={setShowRegistration}
                />
              )}
            </div>
          </div>
        ) : (
          <DoctorHome user={loggedInUser} setLoggedIn={setLoggedIn} />
        )}
      </Paper>
    </div>
  );
};

export default Doctor;
