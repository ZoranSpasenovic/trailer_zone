const express = require("express");
const router = express.Router();
const {
  getSeriesDetails,
  getSeriesList,
  getSeriesTrailers,
  getSimilarSeries,
  getTrendingSeries,
} = require("../controllers/series");

router.get("/trending", getTrendingSeries);

router.get("/:ctg", getSeriesList);

router.get("/:id/trailers", getSeriesTrailers);

router.get("/:id/details", getSeriesDetails);

router.get("/:id/similar", getSimilarSeries);

module.exports = router;
