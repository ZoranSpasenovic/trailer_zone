const express = require("express");
const protectRoute = require("../middleware/protectRoute");

const router = express.Router();

const {
  getTrendingMovie,
  getMovieList,
  getMovieTrailers,
  getMovieDetails,
  getSimilarMovies,
  getMovieCast,
  getMoviesByGenre,
} = require("../controllers/movie");

router.get("/trending", getTrendingMovie);

router.get("/genre/:id", getMoviesByGenre);

router.get("/:id/trailers", protectRoute, getMovieTrailers);

router.get("/:id/details", protectRoute, getMovieDetails);

router.get("/:id/similar", protectRoute, getSimilarMovies);

router.get("/:id/credits", protectRoute, getMovieCast);

router.get("/:ctg", protectRoute, getMovieList);

module.exports = router;
