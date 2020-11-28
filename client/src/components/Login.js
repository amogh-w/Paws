import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";

const Login = ({ values, setValues, validateLogin }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5">Login</Typography>
        <TextField
          name="username"
          value={values.username}
          onChange={handleInputChange}
          label="Username"
          margin="normal"
          variant="outlined"
          rowsMax={4}
          style={{ width: "50vw" }}
        />
        <TextField
          name="password"
          value={values.password}
          onChange={handleInputChange}
          label="Password"
          margin="normal"
          variant="outlined"
          rowsMax={4}
          style={{ width: "50vw" }}
        />
        <br />
        <Button variant="contained" color="primary" onClick={validateLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
