import React, { useState } from "react";
import { Paper, Button, Divider } from "@material-ui/core";

import OwnerHome from "./OwnerHome";
import OwnerRegister from "./OwnerRegister";
import Login from "./Login";

import { useQuery } from "@apollo/client";

import { GET_OWNERS } from "../queries/queries";

const Owner = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const { data } = useQuery(GET_OWNERS);

  const [loggedInUser, setLoggedInUser] = useState({});

  const validateLogin = () => {
    var i;
    for (i = 0; i < data.owners.length; i++) {
      if (
        values.username === data.owners[i].username &&
        values.password === data.owners[i].password
      ) {
        setLoggedInUser(data.owners[i]);
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
                <OwnerRegister
                  setValues={setValues}
                  setShowRegistration={setShowRegistration}
                />
              )}
            </div>
          </div>
        ) : (
          <OwnerHome user={loggedInUser} setLoggedIn={setLoggedIn} />
        )}
      </Paper>
    </div>
  );
};

export default Owner;
