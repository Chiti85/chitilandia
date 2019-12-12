const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingPointsSchema = new Schema({
  city: String,
  name: String,
  address: String,
  schedule: String,
  phone: String,
  description: String,
  cords: { type: { type: String }, coordinates: [Number] }
});

const MeetingP = mongoose.model("MPoints", meetingPointsSchema);
module.exports = MeetingP;
