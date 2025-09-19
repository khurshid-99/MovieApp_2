import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const tvSeasonSlice = createSlice({
  name: "tvSeason",
  initialState,
  reducers: {
    lodadeTvSeason: (state, action) => {
      state.info = action.payload;
      console.log(state, action);
    },
    removeTvSeason: (state) => {
      state.info = null;
    },
  },
});

export const { lodadeTvSeason, removeTvSeason } = tvSeasonSlice.actions;

export default tvSeasonSlice.reducer;
