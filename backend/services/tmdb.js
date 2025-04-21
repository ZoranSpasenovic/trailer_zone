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
  console.log(url);
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

module.exports = { fetchMovies, fetchTrendingMovie };
