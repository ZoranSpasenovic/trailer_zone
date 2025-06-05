const express = require("express");
const { login, signUp, logout, authCheck } = require("../controllers/auth");
const protectRoute = require("../middleware/protectRoute");
const router = express.Router();

router.post("/login", login);

router.post("/signup", signUp);

router.post("/logout", logout);

router.get("/authCheck", protectRoute, authCheck);

module.exports = router;
