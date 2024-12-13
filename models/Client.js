const mongoose = require("mongoose");
const Client_details = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobileNo: String,
  address: String,
  currentAddress: String,
  city: String,
  pinCode: String,
  state: String,
  aadharNo: String,
  panCardNo: String,
  bankName: String,
  branchName: String,
  Accoutno: String,
  ifscCode: String,
  time: String,
});

module.exports = mongoose.model("Client_details", Client_details);
