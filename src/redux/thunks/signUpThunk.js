import { createAsyncThunk } from '@reduxjs/toolkit';

const postSignUp = createAsyncThunk('users/signup', async (user) => fetch('http://127.0.0.1:3001/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ user }),
}).then(async (res) => {
  if (res.ok) {
    return res.json();
  }
  if (res instanceof Response) {
    const error = await res.json();
    return Promise.reject(new Error(error.status.message));
  }
  return Promise.reject(new Error('Error signing up'));
}));

export default postSignUp;
