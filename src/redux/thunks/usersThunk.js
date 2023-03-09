import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const headers = {
  headers: {
    ContentType: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
};

export const getUsers = createAsyncThunk('getUsers', async () => {
  const response = await axios.get('http://127.0.0.1:3001/users/', headers);
  return response.data;
});
