import {
  sortAction,
  homeMoviesApi,
  getFavouriteMoviesAction,
  addToFavouritesAction,
  removeFromFavouritesAction,
} from "../Actions";

const initialState = {
  movies: [],
  favouriteMovies: [],
  sortedAndFilteredMovies: [],
  loading: false,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case homeMoviesApi.pending: {
      return {
        ...state,
        loading: true,
      };
    }
    case homeMoviesApi.success: {
      return {
        ...state,
        movies: action.payload,
        sortedAndFilteredMovies: action.payload,
        loading: false,
      };
    }
    case homeMoviesApi.rejected: {
      return {
        ...state,
        movies: initialState.movies,
        sortedAndFilteredMovies: initialState.sortedAndFilteredMovies,
        loading: false,
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
    case addToFavouritesAction: {
      return {
        ...state,
        favouriteMovies: [...state.favouriteMovies, action.payload],
      };
    }
    case removeFromFavouritesAction: {
      const itemToRemoveIndex = state.favouriteMovies.indexOf(action.payload);
      const newFavourites = [...state.favouriteMovies];
      newFavourites.splice(itemToRemoveIndex, 1);
      return {
        ...state,
        favouriteMovies: newFavourites,
      };
    }
    default:
      return state;
  }
};
export default homeReducer;
