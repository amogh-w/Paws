const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    rating: Number,
    feedback: String,
    ownerName: String,
    doctorName: String,
    petCategory: String,
    petBreed: String,
  },
  { collection: "reviews" }
);

module.exports = mongoose.model("Review", reviewSchema);
