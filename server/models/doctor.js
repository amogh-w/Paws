const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const doctorSchema = new Schema(
  {
    name: String,
    photo: String,
    address: String,
    dob: String,
    age: Number,
    phone: String,
    clinicAddress: String,
    clinicCity: String,
    experience: String,
    expertise: String,
  },
  { collection: "doctors" }
);

module.exports = mongoose.model("Doctor", doctorSchema);
