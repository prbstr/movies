import { createAsyncThunk } from "@reduxjs/toolkit";
import { SortDimensions } from "../constants/SortDimensions";
import { createApiAction } from "../utilities/Redux";
import { sortByPopularity, sortByReleaseDate, sortByTitle } from "../utilities/Sort";

export const homeMoviesApi = createApiAction("home/movies");
export const sortAction = "sort/movies";
export const getFavouriteMoviesAction = "filter/favourites";

export const fetchHomePageDataAsync = createAsyncThunk(
  homeMoviesApi.name,
  async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=bd00ab70e1aafefa95d2444b8c7f2ccc";
    const response = await fetch(url);
    const payload = await response.json();
    console.log(payload);
    return payload.results.slice(0, 12).sort(sortByTitle);
  }
);

export const sortMovies = (allMovies, dimension) => {
  let sortedMovies = [];
  const movies = [...allMovies];
  switch (dimension) {
    case SortDimensions.ALL:
      sortedMovies = movies.sort(sortByTitle);
      break;
    case SortDimensions.POPULAR:
      sortedMovies = movies.sort(sortByPopularity);
      break;
    case SortDimensions.LATEST:
      sortedMovies = movies.sort(sortByReleaseDate);
      break;
    default:
      sortedMovies = movies;
      break;
  }
  return {
    type: sortAction,
    payload: sortedMovies,
  };
};

export const filterFavouriteMovies = (dimension) => {
  return {
    type: getFavouriteMoviesAction,
  };
};