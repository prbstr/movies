import React from "react";
import "./App.css";
import Home from "../features/Home/Home";
import { makeStyles } from "@mui/styles";
import NavBar from "../features/NavBar/NavBar";
import palette from "../theme/Palette";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  header: {
    height: '84px'
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <header className={classes.header}>
        <NavBar />
      </header>
      <div className={classes.root}>
        <Home />
      </div>
    </>
  );
};

export default App;
