import { createAsyncThunk } from '@reduxjs/toolkit';

const postSignUp = createAsyncThunk('users/signup', async (user) => {
  await fetch('http://127.0.0.1:3001/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user }),
  }).then((res) => {
    if (res.ok) {
      localStorage.setItem('token', res.headers.get('Authorization'));
      return res.json();
    }
    throw new Error(res);
  });
});

export default postSignUp;
