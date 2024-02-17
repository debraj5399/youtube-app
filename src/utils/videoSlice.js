import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: [],
  reducers: {
    cacheVideo: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { cacheVideo } = videoSlice.actions;

export default videoSlice.reducer;
