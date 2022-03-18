import React from "react";
import "./App.css";
import Home from "../features/Home/Home";
import { makeStyles } from "@mui/styles";
import NavBar from "../features/NavBar/NavBar";
import palette from "../theme/Palette";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0px 0",
    backgroundColor: palette.primary,
  },
  heading: {
    marginLeft: "30px",
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
        <div>
          <Home />
        </div>
      </div>
    </>
  );
};

export default App;
