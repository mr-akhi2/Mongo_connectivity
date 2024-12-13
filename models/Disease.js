const mongoose = require("mongoose");

let disease_name = new mongoose.Schema({
  name: String,
  description: String,
  price: String,
});
module.exports = mongoose.model("disease_name", disease_name);
