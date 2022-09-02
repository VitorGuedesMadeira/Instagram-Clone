/* eslint-disable linebreak-style */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// First, create the thunk
export const getPosts = createAsyncThunk(
  'home/getPosts',
  async () => {
    const instagram = 'instagram';
    return instagram;
  },
);

const initialState = [];

// Then, handle actions in your reducers:
const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getPosts.fulfilled, (state, action) => action.payload);
  },
});

// Action creators are generated for each case reducer function
export const { herosReducer } = homeSlice.actions;

export default homeSlice.reducer;
