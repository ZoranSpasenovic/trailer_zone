const express = require("express");
const protectRoute = require("../middleware/protectRoute");

const router = express.Router();

const {
  getSeriesDetails,
  getSeriesList,
  getSeriesTrailers,
  getSimilarSeries,
  getTrendingSeries,
} = require("../controllers/series");

router.get("/trending", protectRoute, getTrendingSeries);

router.get("/:ctg", protectRoute, getSeriesList);

router.get("/:id/trailers", protectRoute, getSeriesTrailers);

router.get("/:id/details", protectRoute, getSeriesDetails);

router.get("/:id/similar", protectRoute, getSimilarSeries);

module.exports = router;
