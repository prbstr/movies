import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MovieCard from "../../components/Cards/MovieCard";
import { fetchHomePageDataAsync } from "./Actions";

const useStyles = makeStyles({
  moviesContainer: {
    margin: "24px"
  },
  movie: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
  },
});

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { movies } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchHomePageDataAsync());
  }, []);

  return (
    <Grid container className={classes.movieContainer}>
      {movies.map((movie) => {
        return (
          <Grid item md={3} key={movie.title} className={classes.movie}>
            <MovieCard
              title={movie.title}
              description={movie.overview}
              imagePath={movie.poster_path}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Home;
