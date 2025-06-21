const express = require("express");
const protectRoute = require("../middleware/protectRoute");

const router = express.Router();

const {
  getSeriesDetails,
  getSeriesList,
  getSeriesTrailers,
  getSimilarSeries,
  getTrendingSeries,
  getSeriesCast,
} = require("../controllers/series");

router.get("/trending", getTrendingSeries);

router.get("/:id/trailers", protectRoute, getSeriesTrailers);

router.get("/:id/details", protectRoute, getSeriesDetails);

router.get("/:id/similar", protectRoute, getSimilarSeries);

router.get("/:id/credits", protectRoute, getSeriesCast);
router.get("/:ctg", protectRoute, getSeriesList);

module.exports = router;
