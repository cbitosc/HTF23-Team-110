// routes/auth.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// User registration (Sign up)
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "User registration failed", error: error.message });
  }
});

// User login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
    console.log("in login");
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
    console.log("in loginerr");
  }
});

module.exports = router;
