const express = require("express");
const app = express();

const authRoutes = require("./routes/authRoutes");

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING");
});

app.listen(3000, () => {
  console.log("server Running");
});
