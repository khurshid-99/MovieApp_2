import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {
    lodadeTrending: (state, actions) => {
      state.info = actions.payload;
    },
    removieTrending: (state, actions) => {
      state.info = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { lodadeTrending, removieTrending } = trendingSlice.actions;

export default trendingSlice.reducer;
