import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    lodadeTv: (state, actions) => {
      state.info = actions.payload;
    },
    removieTv: (state) => {
      state.info = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { lodadeTv, removieTv } = tvSlice.actions;

export default tvSlice.reducer;
