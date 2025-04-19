const express = require("express");
const { login, signUp, logout } = require("../controllers/auth");
const router = express.Router();

router.get("/login", login);

router.get("/signup", signUp);

router.get("logout", logout);

module.exports = router;
