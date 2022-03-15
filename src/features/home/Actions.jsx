import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApiAction } from "../../utilities/Redux";

export const homeMovies = createApiAction("home/movies");

export const fetchHomePageDataAsync = createAsyncThunk(
  homeMovies.name,
  async () => {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=bd00ab70e1aafefa95d2444b8c7f2ccc";
    const response = await fetch(url);
    const payload = await response.json();
    return payload.results.slice(0,12);
  }
);
