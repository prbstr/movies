import React from "react";
import "./App.css";
import Home from "../features/Home/Home";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import NavBar from "../features/NavBar/NavBar";

const useStyles = makeStyles({
  root: {
    margin: "0px 0",
    backgroundColor: "lightgrey",
  },
  heading: {
    marginLeft: "30px",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className={classes.root}>
        <div>
          <Home />
        </div>
      </div>
    </>
  );
};

export default App;
