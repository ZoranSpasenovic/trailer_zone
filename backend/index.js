const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const connectDb = require("./config/db");

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");
const seriesRoutes = require("./routes/seriesRoutes");
const searchRoutes = require("./routes/searchRoutes");
const protectRoute = require("./middleware/protectRoute");

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/series", protectRoute, seriesRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server Running on http://localhost:" + PORT);
  connectDb();
});
