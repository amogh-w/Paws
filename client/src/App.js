import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Admin from "./components/Admin";
import Appointment from "./components/Appointment";
import Doctor from "./components/Doctor";
import Owner from "./components/Owner";
import Pet from "./components/Pet";
import Review from "./components/Review";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline, Container } from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";
import lightBlue from "@material-ui/core/colors/lightBlue";
import deepPurple from "@material-ui/core/colors/deepPurple";
import deepOrange from "@material-ui/core/colors/deepOrange";

const App = () => {
  const [darkState, setDarkState] = React.useState(
    window.localStorage.getItem("darkMode") === "true" ? true : false
  );

  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];

  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  const handleThemeChange = () => {
    const preference = darkState;
    setDarkState(!darkState);
    window.localStorage.setItem("darkMode", !preference);
  };

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar darkState={darkState} handleThemeChange={handleThemeChange} />
          <Container>
            <div style={{ padding: "10px", marginTop: "80px" }}>
              <Route path="/" exact component={Landing} />
              <Route path="/admin" component={Admin} />
              <Route path="/appointment" component={Appointment} />
              <Route path="/doctor" component={Doctor} />
              <Route path="/owner" component={Owner} />
              <Route path="/pet" component={Pet} />
              <Route path="/review" component={Review} />
            </div>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
