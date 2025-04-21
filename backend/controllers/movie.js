const { fetchMovies, fetchTrendingMovie } = require("../services/tmdb");

const getTrendingMovie = async (req, res) => {
  try {
    const result = await fetchTrendingMovie();
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "internal Server Error " });
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

module.exports = {
  getTrendingMovie,
  getMovieList,
};
