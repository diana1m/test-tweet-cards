import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6431cc53d4518cfb0e694cf2.mockapi.io/contacts';

export const fetchTweets = createAsyncThunk(
  'tweets/fetchTweets',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/tweets');

      return data;
    } catch (e) {
        thunkAPI.rejectWithValue(e.message);
    }
  }
);