import React from "react";
import { Button, Paper, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import logo from "./paws.png";

const Landing = () => {
  return (
    <div>
      <Paper style={{ margin: "20px", padding: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h4">Welcome to Paws.</Typography>
          <Typography variant="p">
            VETERINARY AND PET WELFARE MANAGEMENT SYSTEM
          </Typography>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <img
            src={logo}
            style={{ width: "200px", margin: "30px" }}
            alt="Logo"
          />
        </div>
        <Typography variant="h6">WHAT IS PET WELFARE?</Typography>
        <Typography variant="p">
          Pet welfare means the physical and mental state of an animal in
          relation to the conditions in which it lives and dies.
        </Typography>
        <Typography variant="h6">Good animal welfare requires:</Typography>
        <Typography variant="p">
          1. Disease prevention. <br />
          2. Appropriate veterinary care. <br />
          3. A stimulating and safe environment. <br />
          4. Proper grooming. <br />
        </Typography>
        <Typography variant="h6">What we provide:</Typography>
        <Typography variant="p">
          We provide a system based application which is based on redirection
          and that helps to connect Veterinary doctors and grooming clinics to
          pet owners for the welfare of their pets.
        </Typography>
      </Paper>
      <Paper style={{ margin: "20px", padding: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h4">Portal Links</Typography>
          <Button
            to="/owner"
            color="primary"
            variant="contained"
            component={RouterLink}
            style={{ width: "20%", margin: "10px" }}
          >
            Owner
          </Button>
          <Button
            to="/doctor"
            color="primary"
            variant="contained"
            component={RouterLink}
            style={{ width: "20%", margin: "10px" }}
          >
            Doctor
          </Button>
          <Button
            to="/review"
            color="primary"
            variant="contained"
            component={RouterLink}
            style={{ width: "20%", margin: "10px" }}
          >
            Reviews
          </Button>
          <Button
            to="/admin"
            color="primary"
            variant="contained"
            component={RouterLink}
            style={{ width: "20%", margin: "10px" }}
          >
            Admin
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Landing;
