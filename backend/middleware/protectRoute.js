const jwt = require("jsonwebtoken");
const User = require("../models/user");

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies["jwt-netflix"];
    if (!token)
      return res.status(401).json({ message: "User not authorized!" });

    const decoded = jwt.verify(token, process.env.JWT_KEY);
    if (!decoded)
      return res.status(401).json({ message: "User not authorized!" });

    const user = await User.findById(decoded.userId);
    if (!user) return res.status(401).json({ message: "User not found!" });

    req.user = user;
    next();
  } catch (err) {
    console.log("Error in protect route: " + err);
    return res.status(500).json({ message: "internal Server Error" });
  }
};

module.exports = protectRoute;
