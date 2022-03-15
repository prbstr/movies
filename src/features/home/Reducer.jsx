import { homeMovies } from "./Actions";

const initialState = {
  movies: []
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case homeMovies.success: {
      return {
        ...state,
        movies: action.payload
      }
    }
    case homeMovies.rejected: {
      return {
        ...state,
        movies: action.payload
      }
    }
    default:
      return state;
  }
}
export default homeReducer;