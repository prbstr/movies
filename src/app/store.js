import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/home/Reducer';

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
