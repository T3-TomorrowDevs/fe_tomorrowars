import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const accessToken = localStorage.getItem("access_token");

export const fetchGetUser = createAsyncThunk("user/getUser", () => {

  const headers = {
    'Authorization': 'Bearer ' + accessToken
  };

  return fetch("https://c4ad5875-e804-4639-bd44-a07b3a2f480d.mock.pstmn.io/api/user", { headers })
    .then(response => {
      if (!response.ok) throw Error(response.statusText)
      return response.json();
    }).then(json => json);

  // return axios.get("https://c4ad5875-e804-4639-bd44-a07b3a2f480d.mock.pstmn.io/api/user")
  //   .then((response) => response.data)
  //   .catch((error) => error)
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    // user: {
    //   level: 1,
    //   credits: 1000,
    //   name: "Angela"
    // }
    loading: '',
    error: '',
    user: []
  },
  reducers: {
    userProfile: (state, action) => {
      state.user = action.payload
    },
    useMoney: (state, action) => {
      state.user.credits = action.payload;
    }
  },
  extraReducers: {
    [fetchGetUser.pending]: state => {
      state.loading = "yes";
    },
    [fetchGetUser.rejected]: (state, action) => {
      state.loading = '';
      state.error = action.error.message;
    },
    [fetchGetUser.fulfilled]: (state, action) => {
      state.loading = '';
      state.user = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { userProfile, useMoney } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const userReducer = userSlice.reducer;