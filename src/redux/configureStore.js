/* eslint-disable linebreak-style */
import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlice';
// import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
