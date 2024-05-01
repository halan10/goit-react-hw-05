import axios from 'axios';

export const pathImg = 'https://image.tmdb.org/t/p/w500/';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const CLIENT_ID =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTdmYWFiMTcwYzJhZTBiMzM1YzRjOTY5NTI2ZjY4YiIsInN1YiI6IjY2MmVjNWUyMWYwMjc1MDEyNDE0NzVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qy2NrznPVdeo0DZcdtRQW15-L7vQoeD7I-f5hksPo2A';

axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${CLIENT_ID}`;
  return config;
});

export const getPopularMovies = async () => {
  const responce = await axios.get('/trending/movie/day', {
    params: {
      language: 'en-US',
    },
  });
  console.log(responce.data);
  return responce.data.results;
};

export const getMoviesById = async movieId => {
  const responce = await axios.get(`/movie/${movieId}`, {
    params: {
      language: 'en-US',
    },
  });
  console.log(responce.data);
  return responce.data;
};

export const getMoviesCredits = async movieId => {
  const responce = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      language: 'en-US',
    },
  });
  console.log(responce.data);
  return responce.data;
};

export const getMoviesReviews = async movieId => {
  const responce = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      language: 'en-US',
    },
  });
  console.log('reviews', responce.data.results);
  return responce.data;
};

export const getSearchMovie = async query => {
  const responce = await axios.get(`/search/movie`, {
    params: {
      query,
    },
  });
  console.log('movieSEarch', responce.data);
  return responce.data.results;
};
