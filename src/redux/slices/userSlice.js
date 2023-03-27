import { createSlice } from '@reduxjs/toolkit';
import getUser from '../thunks/userThunk';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: undefined,
    loading: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

// Action creators are generated for each case reducer function
export const { userReducer } = userSlice.actions;

export default userSlice.reducer;
