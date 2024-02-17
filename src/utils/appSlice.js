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
    openMenu: (state) => {
      state.isSideMenuOpen = true;
    },
  },
});

export const { toggleMenu, closeMenu, openMenu } = appSlice.actions;

export default appSlice.reducer;
