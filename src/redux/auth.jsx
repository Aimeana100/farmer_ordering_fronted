/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// First, define the reducer and action creators via `createSlice`
const userSlice = createSlice({
  name: 'users',
  initialState: {
    loading: 'idle',
    user: JSON.parse(localStorage.getItem('authUser')),
    token: JSON.parse(localStorage.getItem('token')),
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('authUser', JSON.stringify(action.payload));
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('authUser');
      localStorage.removeItem('token');
    },
  },
});

// Destructure and export the plain action creators
export const { setUser, clearUser, setToken } = userSlice.actions;
export default userSlice.reducer;
