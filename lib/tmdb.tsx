import * as fetch from 'node-fetch';

const { TMDB_LIST_ID, TMDB_API_KEY } = process.env;

const getRecommendedList = async () => {
  const API_REQUEST_URL = `https://api.themoviedb.org/3/list/${TMDB_LIST_ID}?api_key=${TMDB_API_KEY}`;

  return fetch(API_REQUEST_URL);
};

export { getRecommendedList };
