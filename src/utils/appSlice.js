import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    },
    closeMenu: (state) => {
      state.isSideMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;

export default appSlice.reducer;
