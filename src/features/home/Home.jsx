import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MovieCard from "../../components/Cards/MovieCard";
import palette from "../../theme/Palette";
import { fetchHomePageDataAsync, filterFavouriteMovies } from "../Actions";

const useStyles = makeStyles({
  moviesContainer: {},
  movie: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  noMoviesTextContainer: {
    color: palette.secondary,
    display: "flex",
    justifyContent: "center",
    marginTop: "20vh",
  },
});

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { movies, favouriteMovies, sortedAndFilteredMovies } = useSelector(
    (state) => state.home
  );

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(fetchHomePageDataAsync());
    }
  }, [dispatch, movies]);

  if (sortedAndFilteredMovies.length === 0) {
    return (
      <div className={classes.noMoviesTextContainer}>
        <Typography variant="h4">
          <b>No movies found</b>
        </Typography>
      </div>
    );
  }

  return (
    <>
      <Grid container className={classes.moviesContainer}>
        {sortedAndFilteredMovies?.map((movie) => {
          const isFavourite = favouriteMovies.some(
            (favourite) => favourite.id === movie.id
          );
          return (
            <Grid item md={3} key={movie.title} className={classes.movie}>
              <MovieCard movie={movie} isFavourite={isFavourite} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Home;
