import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/counter/userSlice';
import productSliceReducer from './productSlice';

export const store = configureStore({
  reducer: {
    user : userReducer,
    product : productSliceReducer

  },
});