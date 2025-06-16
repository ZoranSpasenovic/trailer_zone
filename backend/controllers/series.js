const { fetchTMDB } = require("../services/tmdb");

const getTrendingSeries = async (req, res) => {
  try {
    const { results } = await fetchTMDB(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US"
    );

    const randomTvSeries = results[Math.floor(Math.random() * results?.length)];
    return res.status(200).json(randomTvSeries);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "internal Server Error " + err });
  }
};

const getSeriesList = async (req, res) => {
  const { ctg } = req.params;
  const { page = 1 } = req.query;
  try {
    const { results } = await fetchTMDB(
      `https://api.themoviedb.org/3/tv/${ctg}?language=en-US&page=${page}`
    );

    return res.status(200).json(results);
  } catch (err) {
    return res.status(500).json({ message: "Error fetching movies " + err });
  }
};

const getSeriesTrailers = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchTMDB(
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`
    );
    return res.status(200).json(data.results);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Could not fetch movie trailers: " + err });
  }
};

const getSeriesDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchTMDB(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`
    );
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error :" + err });
  }
};

const getSimilarSeries = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchTMDB(
      `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`
    );
    return res.status(200).json(data.results);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error: " + err });
  }
};

const getSeriesCast = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchTMDB(
      `https://api.themoviedb.org/3/tv/${id}/credits`
    );

    return res.status(200).json(data.results);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error: " + err });
  }
};

module.exports = {
  getTrendingSeries,
  getSeriesDetails,
  getSeriesList,
  getSeriesTrailers,
  getSimilarSeries,
  getSeriesCast,
};
