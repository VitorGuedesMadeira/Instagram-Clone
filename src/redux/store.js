/* eslint-disable linebreak-style */
import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './slices/postsSlice';
import usersSlice from './slices/usersSlice';
// import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    users: usersSlice,
    posts: postsSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
