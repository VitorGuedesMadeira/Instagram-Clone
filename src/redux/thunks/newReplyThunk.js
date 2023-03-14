import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3001/comment_replies/';

const headers = {
  headers: {
    ContentType: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
};

const newReply = createAsyncThunk('newReply', async (body) => {
  const response = await axios.post(url, body, headers);
  return response.data;
});
export default newReply;
