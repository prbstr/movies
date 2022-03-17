import React from "react";
import "./App.css";
import Home from "../features/home/Home";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  root: {
    margin: "24px 12px",
  },
  heading: {
    marginLeft: '30px'
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.heading} style={{height: '160px'}}>
        <Typography  variant="h2">Movie Library</Typography>
      </div>
      <Home />
    </div>
  );
};

export default App;
