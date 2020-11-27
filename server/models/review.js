const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    rating: Number,
    feedback: String,
    ownerId: String,
    doctorId: String,
    petId: String,
  },
  { collection: "reviews" }
);

module.exports = mongoose.model("Review", reviewSchema);
