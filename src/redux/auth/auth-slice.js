import { createSlice } from "@reduxjs/toolkit";
import {
  checkLogin,
  login,
  logOut,
  registration,
  updateUserProfile,
} from "./auth-operations";

const handlePending = (state) => {
  state.error = null;
  state.isRefreshing = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoggedIn = false;
  state.error = payload;
  state.isRefreshing = false;
};

const state = {
  user: {},
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setIsLogin: (state, { payload }) => ({
      ...state,
      isLoggedIn: payload.isLoggedIn,
      isRefreshing: false,
    }),
  },
  extraReducers: (builder) =>
    builder
      .addCase(registration.pending, handlePending)
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(registration.rejected, handleRejected)

      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(login.rejected, handleRejected)

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = {};
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logOut.rejected, handleRejected)

      .addCase(checkLogin.pending, handlePending)
      .addCase(checkLogin.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
      })
      .addCase(checkLogin.rejected, handleRejected)

      .addCase(updateUserProfile.pending, handlePending)
      .addCase(updateUserProfile.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isRefreshing = false;
      })
      .addCase(updateUserProfile.rejected, handleRejected),
});

export const { setIsLogin, setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
