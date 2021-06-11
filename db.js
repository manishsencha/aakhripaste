const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: "txt",
  },
  time: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = mongoose.model("data", dataSchema);
