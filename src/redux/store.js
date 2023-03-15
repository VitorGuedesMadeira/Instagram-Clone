/* eslint-disable linebreak-style */
import { configureStore } from '@reduxjs/toolkit';
import postSlice from './slices/postSlice';
import postsSlice from './slices/postsSlice';
import storiesSlice from './slices/storiesSlice';
// import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    posts: postsSlice,
    post: postSlice,
    stories: storiesSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
