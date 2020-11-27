const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
  {
    date: Date,
    ownerId: String,
    doctorId: String,
    petId: String,
    appointmentType: String,
    appointmentStatus: String,
  },
  { collection: "appointments" }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
