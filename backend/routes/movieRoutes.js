const express = require("express");
const protectRoute = require("../middleware/protectRoute");

const router = express.Router();

const {
  getTrendingMovie,
  getMovieList,
  getMovieTrailers,
  getMovieDetails,
  getSimilarMovies,
} = require("../controllers/movie");

router.get("/trending", getTrendingMovie);

router.get("/:ctg", protectRoute, getMovieList);

router.get("/:id/trailers", protectRoute, getMovieTrailers);

router.get("/:id/details", protectRoute, getMovieDetails);

router.get("/:id/similar", protectRoute, getSimilarMovies);

module.exports = router;
