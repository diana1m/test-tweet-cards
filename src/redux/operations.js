import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6431cc53d4518cfb0e694cf2.mockapi.io/contacts';

export const fetchTweets = createAsyncThunk(
  'tweets/fetchTweets',
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await axios.get("/tweets", {
        params: {
          page,
          limit: 6,
        },
      });

      return data;
    } catch (e) {
        thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editTweet = createAsyncThunk(
  'tweets/editUser',
  async ({ id, followers, isFollowed }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/tweets/${id}`, {
        followers,
        isFollowed,
      });

      return data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);
