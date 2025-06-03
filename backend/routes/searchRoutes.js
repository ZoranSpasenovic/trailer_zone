const express = require("express");
const router = express.Router();
const {
  getPersonSearch,
  getMovieSearch,
  getSeriesSearch,
  getSearchHistory,
  deleteSearchHistory,
} = require("../controllers/search");

router.get("/person", getPersonSearch);

router.get("/movie", getMovieSearch);

router.get("/series", getSeriesSearch);

router.get("/history", getSearchHistory);

router.delete("/history/:id", deleteSearchHistory);

module.exports = router;
