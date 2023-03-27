import { createAsyncThunk } from '@reduxjs/toolkit';

const postSignIn = createAsyncThunk('users/signin', async (user) => fetch('http://127.0.0.1:3001/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ user }),
}).then(async (res) => {
  if (res.ok) {
    localStorage.setItem('token', res.headers.get('Authorization'));
    return res.json();
  }
  if (res instanceof Response) {
    const error = await res.json();
    return Promise.reject(new Error(error.status.message));
  }
  return Promise.reject(new Error('Error signing up'));
}));
export default postSignIn;
