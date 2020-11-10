import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DashboardIcon from "@material-ui/icons/Dashboard";
// import SearchIcon from "@material-ui/icons/Search";
// import DescriptionIcon from "@material-ui/icons/Description";
// import InfoIcon from "@material-ui/icons/Info";
// import ChatIcon from "@material-ui/icons/Chat";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness2Icon from "@material-ui/icons/Brightness2";

import { Link } from "react-router-dom";
import clsx from "clsx";

import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";

import logo from "./paws.png";

const Navbar = ({ darkState, handleThemeChange }) => {
  const [open, setOpen] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [drawerWidth, setDrawerWidth] = React.useState(240);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  React.useEffect(() => {
    if (drawerWidth < 640) return setDrawerWidth(200);
    setDrawerWidth(240);
  }, [drawerWidth]);

  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (width >= 960 && width <= 1400) {
    console.log(width);
    return (
      <>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              <img
                src={logo}
                style={{ width: "50px", marginRight: "20px" }}
                alt="logo"
              />
            </Typography>{" "}
            <Button
              color="primary"
              variant="contained"
              onClick={handleThemeChange}
            >
              {!darkState ? <Brightness2Icon /> : <Brightness5Icon />}
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button component={Link} to="/admin">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Admin</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/appointment">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Appointment</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/doctor">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Doctor</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/owner">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Owner</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/pet">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Pet</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/review">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Review</ListItemText>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      </>
    );
  }

  return (
    <>
      <Hidden mdDown>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <img
              src={logo}
              style={{ width: "50px", marginRight: "20px" }}
              alt="logo"
            />
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Paws
            </Typography>
            <Button
              color="primary"
              variant="contained"
              onClick={handleThemeChange}
            >
              {!darkState ? <Brightness2Icon /> : <Brightness5Icon />}
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button component={Link} to="/admin">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Admin</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/appointment">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Appointment</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/doctor">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Doctor</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/owner">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Owner</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/pet">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Pet</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/review">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Review</ListItemText>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      </Hidden>

      <Hidden mdUp>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              <img
                src={logo}
                style={{ width: "50px", marginRight: "20px" }}
                alt="logo"
              />
            </Typography>{" "}
            <Button
              color="primary"
              variant="contained"
              onClick={handleThemeChange}
            >
              {!darkState ? <Brightness2Icon /> : <Brightness5Icon />}
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button component={Link} to="/admin">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Admin</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/appointment">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Appointment</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/doctor">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Doctor</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/owner">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Owner</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/pet">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Pet</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/review">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Review</ListItemText>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      </Hidden>
    </>
  );
};

export default Navbar;
