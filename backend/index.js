const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDb = require("./config/db");

const authRoutes = require("./routes/authRoutes");

dotenv.config();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server Running on http://localhost:" + PORT);
  connectDb();
});
