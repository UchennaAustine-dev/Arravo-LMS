import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  sign: false,
  user: {} || null,
};

const globalState = createSlice({
  name: "state",
  initialState,
  reducers: {
    openToggle: (state: any) => {
      state.toggle = true;
    },
    closeToggle: (state: any) => {
      state.toggle = false;
    },
    onSign: (state: any) => {
      state.sign = true;
    },
    offSign: (state: any) => {
      state.sign = false;
    },
    mainUser: (state: any, { payload }) => {
      state.user = payload;
    },
    logOut: (state: any) => {
      state.user = null;
    },
  },
});

export const { closeToggle, openToggle, offSign, onSign, logOut, mainUser } =
  globalState.actions;

export default globalState.reducer;
