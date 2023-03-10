/* eslint-disable linebreak-style */
/* */
import { createSlice } from '@reduxjs/toolkit';
import getUsers from '../thunks/usersThunk';

// Handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

// Action creators are generated for each case reducer function
export const { usersReducer } = usersSlice.actions;

export default usersSlice.reducer;
