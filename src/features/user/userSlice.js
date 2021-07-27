import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    userProfile: (state, action) => {
      state.user = action.payload
    }
  }
});

// Action creators are generated for each case reducer function
export const { userProfile } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const userReducer = userSlice.reducer;