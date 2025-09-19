export { removieTrending } from "../reducers/TrendingSlices";
import { lodadeTrending } from "../reducers/TrendingSlices";
import { instance } from "../../components";

export const asyncLoderMovie = (id) => async (dispatch) => {
  try {
    const upcoming = await instance.get(`/movie/upcoming`);
    // const data = await instance.get(`/movie/${id}`);
    const original_language = await instance.get(`/movie/${id}`);
    const original_title = await instance.get(`/movie/${id}`);
    const popularity = await instance.get(`/movie/${id}`);
    const imdb_id = await instance.get(`/movie/${id}`);
    const backdrop_path = await instance.get(`/movie/${id}`);
    const poster_path = await instance.get(`/movie/${id}`);
    const tagline = await instance.get(`/movie/${id}`);
    const status = await instance.get(`/movie/${id}`);
    const title = await instance.get(`/movie/${id}`);
    const video = await instance.get(`/movie/${id}`);
    const budget = await instance.get(`/movie/${id}`);
    const release_date = await instance.get(`/movie/${id}`);
    const runtime = await instance.get(`/movie/${id}`);
    const spoken_languages = await instance.get(`/movie/${id}`);
    const overview = await instance.get(`/movie/${id}`);
    const homepage = await instance.get(`/movie/${id}`);
    const origin_country = await instance.get(`/movie/${id}`);
    const similar = await instance.get(`/movie/${id}/similar`);
    const recommendations = await instance.get(`/movie/${id}/recommendations`);
    const translations = await instance.get(`/movie/${id}/translations`);
    const videos = await instance.get(`/movie/${id}/videos`);
    const watch_providers = await instance.get(`/movie/${id}/watch/providers`);
    const images = await instance.get(`/movie/${id}/images`);
    const external_ids = await instance.get(`/movie/${id}/external_ids`);
    const credits = await instance.get(`/movie/${id}/credits`);
    const changes = await instance.get(`/movie/${id}/changes`);

    let allData = {
      upcoming: upcoming.data.results,
      // Detiels: data,
      original_language: original_language.data.original_language,
      original_title: original_title.data.original_title,
      popularity: popularity.data.popularity,
      imdb_id: imdb_id.data.imdb_id,
      backdrop_path: backdrop_path.data.backdrop_path,
      poster_path: poster_path.data.poster_path,
      tagline: tagline.data.tagline,
      status: status.data.status,
      title: title.data.title,
      video: video.data.video,
      budget: budget.data.budget,
      release_date: release_date.data.release_date,
      runtime: runtime.data.runtime,
      spoken_languages: spoken_languages.data.spoken_languages,
      overview: overview.data.overview,
      homepage: homepage.data.homepage,
      origin_country: origin_country.data.origin_country,
      similar: similar.data.results.map((item) => item),
      recommendations: recommendations.data.results,
      translations: translations.data.translations.map((item) => item.name),
      videos: videos.data.results.find((type) => type === "Trailer"),
      watch_providers: watch_providers.data.results.IN,
      images: images.data,
      external_ids: external_ids.data,
      credits: credits.data,
      changes: changes.data,
    };

    dispatch(lodadeTrending(allData));
  } catch (error) {
    console.log(error);
  }
};
