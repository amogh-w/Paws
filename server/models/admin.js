const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    name: String,
    photo: String,
    address: String,
    dob: String,
    age: Number,
  },
  { collection: "admins" }
);

module.exports = mongoose.model("Admin", adminSchema);
