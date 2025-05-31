const { fetchTMDB } = require("../services/tmdb");
const User = require("../models/user");

const pushSearchHistory = async (id, results) => {
  await User.findByIdAndUpdate(id, {
    $push: {
      searchHistory: {
        id: results[0].id,
        image: results[0].profile_path,
        title: results[0].name,
        searchType: "Person",
        createdAt: new Date(),
      },
    },
  });
};

const getPersonSearch = async (req, res) => {
  const query = req.query.query;

  try {
    const { results } = await fetchTMDB(
      `https://api.themoviedb.org/3/search/person?query=${query}`
    );
    await pushSearchHistory(req.user._id, results);
    return res.status(201).json(results);
  } catch (err) {
    return res.status(500).json({ message: "Server Internal Error: " + err });
  }
};

const getMovieSearch = async (req, res) => {
  const { query } = req.query;

  try {
    const { results } = await fetchTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${query}`
    );
    await pushSearchHistory(req.user._id, results);
    return res.status(201).json(results);
  } catch (err) {
    return res.status(500).json({ message: "internal Server Error: " + err });
  }
};

const getSeriesSearch = async (req, res) => {
  const { query } = req.query;

  try {
    const { results } = await fetchTMDB(
      `https://api.themoviedb.org/3/search/tv?query=${query}`
    );
    await pushSearchHistory(req.user._id, results);
    return res.status(201).json(results);
  } catch (err) {
    return res.status(500).json({ message: "internal Server Errror : " + err });
  }
};

module.exports = { getPersonSearch, getMovieSearch, getSeriesSearch };
