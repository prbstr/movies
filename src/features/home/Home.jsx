import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MovieCard from "../../components/Cards/MovieCard";
import { fetchHomePageDataAsync } from "../Actions";

const useStyles = makeStyles({
  moviesContainer: {},
  movie: {
    display: "flex",
    justifyContent: "space-evenly",
    // alignItems: "center",
    // textAlign: "center",
  },
});

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { sortedAndFilteredMovies } = useSelector((state) => state.home);
  console.log(sortedAndFilteredMovies);
  useEffect(() => {
    dispatch(fetchHomePageDataAsync());
  }, [dispatch]);

  return (
    <>
      <Grid container className={classes.moviesContainer}>
        {sortedAndFilteredMovies?.map((movie) => {
          return (
            <Grid item md={3} key={movie.title} className={classes.movie}>
              <MovieCard {...movie} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Home;
