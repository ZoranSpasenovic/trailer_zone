const { fetchTMDB } = require("../services/tmdb");
const User = require("../models/user");

const pushSearchHistory = async (id, searchHistory) => {
  await User.findByIdAndUpdate(id, {
    $push: {
      searchHistory,
    },
  });
};

const getPersonSearch = async (req, res) => {
  const query = req.query.query;

  try {
    const { results } = await fetchTMDB(
      `https://api.themoviedb.org/3/search/person?query=${query}`
    );
    await pushSearchHistory(req.user._id, {
      id: results[0].id,
      image: results[0].profile_path,
      title: results[0].name,
      searchType: "Person",
      createdAt: new Date(),
    });
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
    await pushSearchHistory(req.user._id, {
      id: results[0].id,
      image: results[0].poster_path,
      title: results[0].title,
      searchType: "Movie",
      createdAt: new Date(),
    });
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
    await pushSearchHistory(req.user._id, {
      id: results[0].id,
      image: results[0].poster_path,
      title: results[0].name,
      searchType: "TV Series",
      createdAt: new Date(),
    });
    return res.status(201).json(results);
  } catch (err) {
    return res.status(500).json({ message: "internal Server Errror : " + err });
  }
};

const getSearchHistory = async (req, res) => {
  try {
    res.status(200).json({ success: true, content: req.user.searchHistory });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
};

const deleteSearchHistory = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndUpdate(req.user._id, {
      $pull: {
        searchHistory: { id: +id },
      },
    });
    res.status(200).json({ message: "item from search history is deleted!" });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
  res.status(200).json(id);
};

module.exports = {
  getPersonSearch,
  getMovieSearch,
  getSeriesSearch,
  getSearchHistory,
  deleteSearchHistory,
};
