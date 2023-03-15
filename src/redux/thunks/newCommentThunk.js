import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3001/comments/';

const headers = {
  headers: {
    ContentType: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
};

const newComment = createAsyncThunk('newComment', async (body) => {
  const response = await axios.post(url, body, headers);
  return response.data;
});
export default newComment;
