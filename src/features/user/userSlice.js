import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      level: 1,
      coin: 1000,
      name: "Angela"
    }
  },
  reducers: {
    userProfile: (state, action) => {
      state.user = action.payload
    },
    useMoney: (state, action) => {
      state.user.coin = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { userProfile, useMoney } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const userReducer = userSlice.reducer;