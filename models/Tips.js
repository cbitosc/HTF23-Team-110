// models/GardeningTip.js
const mongoose = require("mongoose");

const gardeningTipSchema = new mongoose.Schema({
  title: String,
  description: String,
  user: String,
});

const GardeningTip = mongoose.model("GardeningTip", gardeningTipSchema);

module.exports = GardeningTip;
