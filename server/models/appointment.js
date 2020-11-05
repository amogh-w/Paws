const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
  {
    time: Date,
    ownerName: String,
    doctorName: String,
    petCategory: String,
    petBreed: String,
    appointmentType: String,
    appointmentStatus: String,
  },
  { collection: "appointments" }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
