/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = () => ({
  isAuthenticated: false,
  user: null,
  token: typeof window !== 'undefined' && localStorage.getItem('token'),
});

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState(),
  reducers: {
    onAuthorized: (state, { payload }) => {
      state.isAuthenticated = true;
      state.user = payload;
    },

    onLoggedIn: (state, { payload }) => {
      state.token = payload.access;
      state.isAuthenticated = true;
      state.user = payload.user;

      if (payload.access) {
        localStorage.setItem('token', payload.access);
      }
    },

    onLoggedOut: state => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;

      localStorage.removeItem('token');
    },
  },
});

export default authSlice.reducer;

export const { onAuthorized, onLoggedIn, onLoggedOut } = authSlice.actions;
