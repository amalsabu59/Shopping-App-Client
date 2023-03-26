import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../axios";

export const login = createAsyncThunk(`/auth/login`, async (user) => {
  const response = await publicRequest.post("/auth/login", user);
  return response.data;
});
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    message: "",
  },
  reducers: {
    logout(state, action) {
      // state.currentUser = null;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.isFetching = true;
      state.error = false;
      state.message = "";
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = payload;
    },
    [login.rejected]: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.message = "wrong credentials";
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;

export const { logout } = userSlice.actions;
