import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3001/stories/';

const getHeaders = () => ({
  headers: {
    ContentType: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
});

const getStories = createAsyncThunk('getStories', async () => {
  const response = await axios.get(url, getHeaders());
  return response.data;
});
export default getStories;
