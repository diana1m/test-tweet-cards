import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets } from "./operations";

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

  },
  extraReducers: builder => {
    builder
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.users = action.payload
    })
    //   })
    //   .addCase(fetchTweets.rejected, (state) => handleRejected(state))
    //   .addCase(addContact.pending, (state) => handlePending(state))
    //   .addCase(addContact.fulfilled, (state, action) => {
    //     state.items = [...state.items, action.payload];
    //     state.isLoading = false;
    //     state.error = null;
    //   })
    //   .addCase(addContact.rejected, (state) => handleRejected(state))
    //   .addCase(deleteContact.pending, (state) => handlePending(state))
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.items = state.items.filter(item => item.id !== action.payload.id);
    //     state.isLoading = false;
    //     state.error = null;
    //   })
    //   .addCase(deleteContact.rejected, (state) => handleRejected(state))
    // }
    }
});

// export const { addContacts, deleteContacts } = contactsSlice.actions;
export const tweetsReducer = tweetsSlice.reducer;