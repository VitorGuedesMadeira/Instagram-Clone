/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';
import getStories from '../thunks/storiesThunk';

// Handle actions in your reducers:
const storiesSlice = createSlice({
  name: 'stories',
  initialState: {
    data: [],
    loading: null,
    error: null,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getStories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStories.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getStories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

// Action creators are generated for each case reducer function
export const { storiesReducer } = storiesSlice.actions;

export default storiesSlice.reducer;
