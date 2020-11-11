const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ownerSchema = new Schema(
  {
    username: String,
    password: String,
    name: String,
    photo: String,
    address: String,
    dob: String,
    age: Number,
    phone: String,
  },
  { collection: "owners" }
);

module.exports = mongoose.model("Owner", ownerSchema);
