const express = require("express");
const router = express.Router();
const { getTrendingMovie, getMovieList } = require("../controllers/movie");


router.get("/trending", getTrendingMovie);

router.get("/:ctg", getMovieList);

module.exports = router;
