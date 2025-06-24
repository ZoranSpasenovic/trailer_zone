const { fetchTMDB } = require("../services/tmdb");

const getTrendingMovie = async (req, res) => {
  try {
    const { results } = await fetchTMDB(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    );
    const randomMovie = results[Math.floor(Math.random() * results?.length)];
    return res.status(200).json(randomMovie);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "internal Server Error " + err });
  }
};

const getMovieList = async (req, res) => {
  const { ctg } = req.params;
  const { page = 1 } = req.query;
  try {
    const { results } = await fetchTMDB(
      `https://api.themoviedb.org/3/movie/${ctg}?language=en-US&page=${page}`
    );

    return res.status(200).json(results);
  } catch (err) {
    return res.status(500).json({ message: "Error fetching movies " + err });
  }
};

const getMovieTrailers = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchTMDB(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    );
    return res.status(200).json(data.results);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Could not fetch movie trailers: " + err });
  }
};

const getMovieDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchTMDB(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    );
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error :" + err });
  }
};

const getSimilarMovies = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchTMDB(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
    );
    return res.status(200).json(data.results);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error: " + err });
  }
};

const getMovieCast = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchTMDB(
      `https://api.themoviedb.org/3/movie/${id}/credits`
    );

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error: " + err });
  }
};

const getMoviesByGenre = async (req, res) => {
  const { id } = req.params;
  const { page = 1 } = req.query;
  try {
    const data = await fetchTMDB(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${id}`
    );
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error " + err });
  }
};

module.exports = {
  getTrendingMovie,
  getMovieList,
  getMovieTrailers,
  getMovieDetails,
  getSimilarMovies,
  getMovieCast,
  getMoviesByGenre,
};
