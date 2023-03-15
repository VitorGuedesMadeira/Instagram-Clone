import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const url = 'http://127.0.0.1:3001/posts/';

// const headers = {
//   headers: {
//     'Content-Type': 'multipart/form-data',
//     Authorization: localStorage.getItem('token'),
//   },
// };

// const postNewPost = createAsyncThunk('newPost', async (formData) => {
//   const response = await axios.post(url, formData, headers);
//   return response.data;
// });
const postNewPost = createAsyncThunk('newPost', async (formData) => {
  const response = await fetch('http://127.0.0.1:3001/posts', {
    method: 'POST',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
    body: formData,
  });
  return response.data;
});
export default postNewPost;
