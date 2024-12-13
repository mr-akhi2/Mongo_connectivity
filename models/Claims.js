const mongoose = require("mongoose");

const Claim_details = new mongoose.Schema({
  name: String,
  cardId: String,
  policyNumber: String,
  insuranceCompany: String,
  hospitalName: String,
  providerName: String,
  address: String,
  claimAmount: String,
  bankName: String,
  bankAccountNumber: String,
  ifscCode: String,
  time: String,
});

module.exports = mongoose.model("Claim_details", Claim_details);
