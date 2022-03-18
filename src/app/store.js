import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/Home/Reducer';

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
