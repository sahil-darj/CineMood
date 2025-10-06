const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  username: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  avatar: { type: String, default: "movie web/Critic/default.jpg" },
});

module.exports = mongoose.model("Review", reviewSchema);
