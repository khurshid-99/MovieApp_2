export { removieTv } from "../reducers/TvSlices";
import { lodadeTv } from "../reducers/TvSlices";
import { instance } from "../../components";

export const asyncLoderTv = (id) => async (dispatch) => {
  try {
    // const data = await instance.get(`/tv/${id}`);
    const backdrop_path = await instance.get(`/tv/${id}`);
    const homepage = await instance.get(`/tv/${id}`);
    const first_air_date = await instance.get(`/tv/${id}`);
    const last_air_date = await instance.get(`/tv/${id}`);
    const genres = await instance.get(`/tv/${id}`);
    const in_production = await instance.get(`/tv/${id}`);
    const languages = await instance.get(`/tv/${id}`);
    const last_episode_to_air = await instance.get(`/tv/${id}`);
    const name = await instance.get(`/tv/${id}`);
    const networks = await instance.get(`/tv/${id}`);
    const next_episode_to_air = await instance.get(`/tv/${id}`);
    const number_of_episodes = await instance.get(`/tv/${id}`);
    const number_of_seasons = await instance.get(`/tv/${id}`);
    const origin_country = await instance.get(`/tv/${id}`);
    const original_language = await instance.get(`/tv/${id}`);
    const original_name = await instance.get(`/tv/${id}`);
    const overview = await instance.get(`/tv/${id}`);
    const popularity = await instance.get(`/tv/${id}`);
    const poster_path = await instance.get(`/tv/${id}`);
    const production_companies = await instance.get(`/tv/${id}`);
    const seasons = await instance.get(`/tv/${id}`);
    const spoken_languages = await instance.get(`/tv/${id}`);
    const status = await instance.get(`/tv/${id}`);
    const tagline = await instance.get(`/tv/${id}`);
    const vote_average = await instance.get(`/tv/${id}`);
    const vote_count = await instance.get(`/tv/${id}`);
    const similar = await instance.get(`/tv/${id}/similar`);
    const lists = await instance.get(`/tv/${id}/lists`);
    const recommendations = await instance.get(`/tv/${id}/recommendations`);
    const translations = await instance.get(`/tv/${id}/translations`);
    const videos = await instance.get(`/tv/${id}/videos`);
    const watch_providers = await instance.get(`/tv/${id}/watch/providers`);
    const images = await instance.get(`/tv/${id}/images`);
    const credits = await instance.get(`/tv/${id}/credits`);
    const content_ratings = await instance.get(`/tv/${id}/content_ratings`);
    const alternative_titles = await instance.get(
      `/tv/${id}/alternative_titles`
    );
    const account_states = await instance.get(`/tv/${id}/account_states`);

    let allData = {
      // data: data.data,
      backdrop_path: backdrop_path.data.backdrop_path,
      homepage: homepage.data.homepage,
      first_air_date: first_air_date.data.first_air_date,
      last_air_date: last_air_date.data.last_air_date,
      genres: genres.data.genres,
      in_production: in_production.data.in_production,
      languages: languages.data.languages,
      last_episode_to_air: last_episode_to_air.data.last_episode_to_air,
      name: name.data.name,
      networks: networks.data.networks,
      next_episode_to_air: next_episode_to_air.data.next_episode_to_air,
      number_of_episodes: number_of_episodes.data.number_of_episodes,
      number_of_seasons: number_of_seasons.data.number_of_seasons,
      origin_country: origin_country.data.origin_country,
      original_language: original_language.data.original_language,
      original_name: original_name.data.original_name,
      overview: overview.data.overview,
      popularity: popularity.data.popularity,
      poster_path: poster_path.data.poster_path,
      production_companies: production_companies.data.production_companies,
      seasons: seasons.data.seasons,
      spoken_languages: spoken_languages.data.spoken_languages,
      status: status.data.status,
      tagline: tagline.data.tagline,
      vote_average: vote_average.data.vote_average,
      vote_count: vote_count.data.vote_count,
      similar: similar.data.similar,
      lists: lists.data.lists,
      recommendations: recommendations.data.recommendations,
      translations: translations.data.translations.map((data) => data.name),
      videos: videos.data.videos,
      watch_providers: watch_providers.data.watch_providers,
      images: images.data.images,
      credits: credits.data.credits,
      content_ratings: content_ratings.data.content_ratings,
      alternative_titles: alternative_titles.data.alternative_titles,
      account_states: account_states.data.account_states,
    };

    dispatch(lodadeTv(allData));
  } catch (error) {
    console.log(error);
  }
};
