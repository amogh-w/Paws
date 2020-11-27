const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const petSchema = new Schema(
  {
    name: String,
    photo: String,
    age: Number,
    breed: String,
    height: Number,
    weight: Number,
    ownerId: String,
  },
  { collection: "pets" }
);

module.exports = mongoose.model("Pet", petSchema);
