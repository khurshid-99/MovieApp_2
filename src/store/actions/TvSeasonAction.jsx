export { removeTvSeason } from "../reducers/TvSeasonSlice";
import { lodadeTvSeason } from "../reducers/TvSeasonSlice";
import { instance } from "../../components";

export const asyncLoderTvSeason = (id) => async (dispatch) => {
  try {
    const all = await instance.get(`/tv/${id}`);
    // const similar = await instance.get(`/tv/${id}/season/${id}`);
    // const seasons = await instance.get(`/tv/${id}`);
    // console.log(seasons.data.seasons);

    let data = {
      all: all.data,
      // seasons: seasons.data.seasons,
      // similar: similar.data.similar,
    };
    lodadeTvSeason(dispatch(data));
  } catch (error) {
    console.log(`asyncLoderTvSeacon ${error}`);
  }
};


// {`/${item.media_type || title}/${item.id}/season/${item.name
//               .replaceAll(" ", "_")
//               .toLowerCase()} `}