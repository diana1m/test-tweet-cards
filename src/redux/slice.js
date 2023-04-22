import { createSlice } from "@reduxjs/toolkit";
import { editTweet, fetchTweets } from "./operations";

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    users: [],
    page: 1,
  },
  reducer: {
    changePage(state, action) {
      console.log(state.page)
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.users = [...state.users, ...action.payload]
    })
    .addCase(editTweet.fulfilled, (state, action) => {
      state.users = state.users.map(user => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            followers: action.payload.followers,
            isFollowed: action.payload.isFollowed,
          };
        }

        return user;
      });
    });
    //   })
    //   .addCase(fetchTweets.rejected, (state) => handleRejected(state))
    //   .addCase(addContact.pending, (state) => handlePending(state))
    //   .addCase(addContact.fulfilled, (state, action) => {
    //     state.items = [...state.items, action.payload];
    //     state.isLoading = false;
    //     state.error = null;
    //   })

    }
});

export const { changePage } = tweetsSlice.actions;
export const tweetsReducer = tweetsSlice.reducer;