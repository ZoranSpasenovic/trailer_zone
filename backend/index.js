const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const cookieParser = require("cookie-parser");
const connectDb = require("./config/db");

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");
const seriesRoutes = require("./routes/seriesRoutes");
const searchRoutes = require("./routes/searchRoutes");

dotenv.config();
const dir = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", movieRoutes);
app.use("/api/v1/series", seriesRoutes);
app.use("/api/v1/search", searchRoutes);

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(dir, "/frontend/dist")));

  app.get("/*splat", (req, res) => {
    res.sendFile(path.resolve(dir, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("server Running on http://localhost:" + PORT);
  connectDb();
});
