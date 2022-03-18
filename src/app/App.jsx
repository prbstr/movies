import React from "react";
import "./App.css";
import Home from "../features/Home";
import { makeStyles } from "@mui/styles";
import NavBar from "../features/NavBar/NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className={classes.root}>
        <Home />
      </div>
    </>
  );
};

export default App;
