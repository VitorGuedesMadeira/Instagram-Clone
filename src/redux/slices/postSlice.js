/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';
import getPost from '../thunks/postThunk';

// Handle actions in your reducers:
const postSlice = createSlice({
  name: 'post',
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
    builder.addCase(getPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

// Action creators are generated for each case reducer function
export const { postReducer } = postSlice.actions;

export default postSlice.reducer;
