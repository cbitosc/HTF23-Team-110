// routes/gardeningTips.js
const express = require("express");
const router = express.Router();
const GardeningTip = require("../models/Tips");

// Get all gardening tips
router.get("/", async (req, res) => {
  try {
    const gardeningTips = await GardeningTip.find();
    res.json(gardeningTips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a gardening tip
router.post("/", async (req, res) => {
  const gardeningTip = new GardeningTip({
    title: req.body.title,
    description: req.body.description,
    user: req.body.user,
  });

  try {
    const newGardeningTip = await gardeningTip.save();
    res.status(201).json(newGardeningTip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
