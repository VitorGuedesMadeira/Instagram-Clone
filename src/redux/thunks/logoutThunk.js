import { createAsyncThunk } from '@reduxjs/toolkit';

const deleteSession = createAsyncThunk('users/signout', async () => {
  const token = localStorage.getItem('token');
  localStorage.removeItem('token');

  await fetch('http://127.0.0.1:3001/logout', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((json) => Promise.reject(json));
  });
});

export default deleteSession;
