import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/Homes/Reducer';

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
