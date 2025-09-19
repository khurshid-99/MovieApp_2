import { configureStore } from "@reduxjs/toolkit";

import trendingReducer from "./reducers/TrendingSlices";
import tvReducer from "./reducers/TvSlices";
import tvSeasonReducer from "./reducers/TvSeasonSlice";

const store = configureStore({
  reducer: {
    Trending: trendingReducer,
    Tv: tvReducer,
    TvSeason: tvSeasonReducer,
  },
});

export default store;
