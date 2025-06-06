const express = require("express");
const protectRoute = require("../middleware/protectRoute");

const router = express.Router();

const {
  getPersonSearch,
  getMovieSearch,
  getSeriesSearch,
  getSearchHistory,
  deleteSearchHistory,
} = require("../controllers/search");

router.get("/person", protectRoute, getPersonSearch);

router.get("/movie", protectRoute, getMovieSearch);

router.get("/series", protectRoute, getSeriesSearch);

router.get("/history", protectRoute, getSearchHistory);

router.delete("/history/:id", protectRoute, deleteSearchHistory);

module.exports = router;
