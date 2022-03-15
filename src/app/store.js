import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/home/home-reducer';

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
