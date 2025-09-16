import { configureStore } from '@reduxjs/toolkit'

import trendingReducer from "./reducers/TrendingSlices"
import tvReducer from './reducers/TvSlices'

const store = configureStore({
  reducer: {
    Trending: trendingReducer,
    Tv: tvReducer,
  }
})

export default store