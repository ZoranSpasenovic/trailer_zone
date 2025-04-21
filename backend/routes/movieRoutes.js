const express = require("express");
const router = express.Router();
const {
  getTrendingMovie,
  getMovieList,
  getMovieTrailers,
  getMovieDetails,
  getSimilarMovies,
} = require("../controllers/movie");

router.get("/trending", getTrendingMovie);

router.get("/:ctg", getMovieList);

router.get("/:id/trailers", getMovieTrailers);

router.get("/:id/details", getMovieDetails);

router.get("/:id/similar", getSimilarMovies);

module.exports = router;
