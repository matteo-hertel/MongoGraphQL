const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CatSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  topSpeed: {
    type: Number
  }
});

module.exports = mongoose.model("car", CatSchema);
