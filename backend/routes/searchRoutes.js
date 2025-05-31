const express = require("express");
const router = express.Router();
const {
  getPersonSearch,
  getMovieSearch,
  getSeriesSearch,
} = require("../controllers/search");

router.get("/person", getPersonSearch);

router.get("/movie", getMovieSearch);

router.get("/series", getSeriesSearch);

module.exports = router;
