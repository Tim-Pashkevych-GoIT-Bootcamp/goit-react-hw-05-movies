import axios from 'axios';
import { MOVIE_DB_API_BASE_URL } from 'helpers/constants';

const moviedbApi = axios.create({
  baseURL: MOVIE_DB_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_THEMOVIEDB_TOKEN}`,
  },
});

export const fetchTrendingMovies = async () => {
  const { data } = await moviedbApi.get('trending/movie/day');

  return data.results;
};

export const fetchMovieDetails = async ({ recordId }) => {
  const { data } = await moviedbApi.get(`movie/${recordId}`);

  return data;
};

export const fetchMovieCasts = async ({ recordId }) => {
  const { data } = await moviedbApi.get(`movie/${recordId}/credits`);

  return data.cast;
};

export const fetchMovieReviews = async ({ recordId }) => {
  const { data } = await moviedbApi.get(`movie/${recordId}/reviews`);

  return data.results;
};

export const findMovies = async ({ query }) => {
  if (!query) {
    return [];
  }

  const { data } = await moviedbApi.get('search/movie', {
    params: { query },
  });

  return data.results;
};
