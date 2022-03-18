import {
  sortAction,
  homeMoviesApi,
  getFavouriteMoviesAction,
} from "../Actions";

const initialState = {
  movies: [],
  favouriteMovies: [],
  sortedAndFilteredMovies: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case homeMoviesApi.success: {
      return {
        ...state,
        movies: action.payload,
        sortedAndFilteredMovies: action.payload,
      };
    }
    case homeMoviesApi.rejected: {
      return {
        ...state,
        movies: initialState.movies,
        sortedAndFilteredMovies: initialState.sortedAndFilteredMovies,
      };
    }
    case sortAction: {
      return {
        ...state,
        sortedAndFilteredMovies: action.payload,
      };
    }
    case getFavouriteMoviesAction: {
      return {
        ...state,
        sortedAndFilteredMovies: state.favouriteMovies,
      };
    }
    default:
      return state;
  }
};
export default homeReducer;
