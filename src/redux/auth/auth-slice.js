import { createSlice } from "@reduxjs/toolkit";

const handlePending = (state) => {
  state.isLoggedIn = false;
  state.error = null;
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoggedIn = false;
  state.error = payload;
  state.isLoading = false;
};

const state = {
  user: {},
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    // updateUserProfile: (state, { payload }) => ({
    //   ...state,
    //   ...payload,
    // }),
    // authStateChange: (state, { payload }) => ({
    //   ...state,
    //   stateChange: payload.stateChange,
    // }),
    // authSingOut: () => state,
  },
});

export const authReducer = authSlice.reducer;
