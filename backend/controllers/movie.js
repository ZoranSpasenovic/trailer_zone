const {
  fetchMovies,
  fetchTrendingMovie,
  fetchMovieTrailers,
  fetchMovieDetails,
  fetchSimilarMovies,
} = require("../services/tmdb");

const getTrendingMovie = async (req, res) => {
  try {
    const result = await fetchTrendingMovie();
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "internal Server Error " + err });
  }
};

const getMovieList = async (req, res) => {
  const { ctg } = req.params;
  const { page } = req.query;
  try {
    const movieList = await fetchMovies(ctg, page);
    return res.status(200).json({
      movieList,
    });
  } catch (err) {
    return res.status(500).json({ message: "Error fetching movies " + err });
  }
};

const getMovieTrailers = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchMovieTrailers(id);
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
    const data = await fetchMovieDetails(id);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error :" + err });
  }
};

const getSimilarMovies = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchSimilarMovies(id);
    return res.status(200).json(data.results);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error: " + err });
  }
};

module.exports = {
  getTrendingMovie,
  getMovieList,
  getMovieTrailers,
  getMovieDetails,
  getSimilarMovies,
};
