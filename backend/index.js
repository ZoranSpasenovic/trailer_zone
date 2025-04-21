const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDb = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");
const seriesRoutes = require("./routes/seriesRoutes");

dotenv.config();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", movieRoutes);
app.use("/api/v1/series", seriesRoutes);

app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server Running on http://localhost:" + PORT);
  connectDb();
});
