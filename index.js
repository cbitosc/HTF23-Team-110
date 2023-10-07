const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
mongoose.connect("mongodb://localhost:27017/sustainable_garden_hub", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
// Middleware
app.use(cors());
app.use(express.json());
// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/sustainable_garden_hub", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use("/api/tips", require("./routes/Tips"));
// Start server
app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
