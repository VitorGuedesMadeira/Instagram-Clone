import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3001/users/';

const headers = {
  headers: {
    ContentType: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
};

const getUsers = createAsyncThunk('getUsers', async () => {
  const response = await axios.get(url, headers);
  return response.data;
});
export default getUsers;
