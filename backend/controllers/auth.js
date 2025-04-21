const bcrypt = require("bcryptjs");
const User = require("../models/user");
const generateToken = require("../utils/generateToken");

const signUp = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Email is not valid!" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist!" });
    }

    const existingUserName = await User.findOne({ username });
    if (existingUserName) {
      return res.status(400).json({ message: "username already exist!" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must me at least 6 characters long!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const profilePics = ["/avatar1.png", "/avatar2.png", "avatar3.png"];
    const image = profilePics[Math.floor(Math.random() * profilePics.length)];

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      image,
    });

    await newUser.save();
    if (newUser) {
      generateToken(newUser._id, res);
    }
    return res.status(201).json({
      message: "User has been succesfuly created!",
      user: {
        ...newUser._doc,
        password: "",
      },
    });
  } catch (err) {
    res.status(400).json({ message: "Error registering account : " + err });
  }
};

const login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist!" });
    }
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      return res.status(400).json({ message: "Password is not correct" });
    }
    generateToken(user._id, res);
    return res.status(201).json({
      user: {
        ...user._doc,
        password: "",
      },
    });
  } catch (err) {
    return res.status(400).json({ message: "Error loging in " + err });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("jwt-netflix", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
    });
  } catch (err) {
    console.log("Error occured while signing out: " + err);
    return res.status(401).json({ message: err });
  }
  return res.status(200).json({ message: "LOGOUT" });
};

module.exports = {
  signUp,
  login,
  logout,
};
