/* eslint-disable linebreak-style */
import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './homeReducer/homeReducer';
// import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    home: homeSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
