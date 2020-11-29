import React, { useState } from "react";
import { Paper, Button, Divider } from "@material-ui/core";

import AdminHome from "./AdminHome";
import AdminRegister from "./AdminRegister";
import Login from "./Login";

import { useQuery } from "@apollo/client";
import { GET_ADMINS } from "../queries/queries";

const Admin = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const { data } = useQuery(GET_ADMINS);

  const [loggedInUser, setLoggedInUser] = useState({});

  const validateLogin = () => {
    var i;
    for (i = 0; i < data.admins.length; i++) {
      if (
        values.username === data.admins[i].username &&
        values.password === data.admins[i].password
      ) {
        setLoggedInUser(data.admins[i]);
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
                <AdminRegister
                  setValues={setValues}
                  setShowRegistration={setShowRegistration}
                />
              )}
            </div>
          </div>
        ) : (
          <AdminHome user={loggedInUser} setLoggedIn={setLoggedIn} />
        )}
      </Paper>
    </div>
  );
};

export default Admin;
