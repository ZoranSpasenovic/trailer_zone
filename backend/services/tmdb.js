const axios = require("axios");

const fetchTrendingMovie = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };
  const response = await axios.get(url, options);
  if (response.status !== 200) {
    throw new Error("Failed to fetch movies" + response.statusText);
  }
  const { data } = response;

  const randomMovie =
    data.results[Math.floor(Math.random() * data.results?.length)];

  return randomMovie;
};

const fetchMovies = async (ctg, page) => {
  const url = `https://api.themoviedb.org/3/movie/${ctg}?language=en-US&page=${page}`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  const response = await axios.get(url, options);

  if (response.status !== 200) {
    throw new Error("Failed to fetch movies" + response.statusText);
  }

  return response.data;
};

const fetchMovieTrailers = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;

  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  const response = await axios.get(url, options);
  if (response.status !== 200) {
    throw new Error("Failed to fetch movie trailers: " + response.statusText);
  }

  return response.data;
};

const fetchMovieDetails = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  const response = await axios.get(url, options);

  if (response.status !== 200) throw new Error("Error fetchin movie details");

  return response.data;
};

const fetchSimilarMovies = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  const response = await axios.get(url, options);

  if (response.status !== 200) throw new Error("Error fetching similar movies");

  return response.data;
};

module.exports = {
  fetchMovies,
  fetchTrendingMovie,
  fetchMovieTrailers,
  fetchMovieDetails,
  fetchSimilarMovies,
};
