import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const headers = {
  headers: {
    ContentType: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
};

const getPost = createAsyncThunk('getPost', async (id) => {
  const response = await axios.get(`http://127.0.0.1:3001/posts/${id}`, headers);
  return response.data;
});
export default getPost;
