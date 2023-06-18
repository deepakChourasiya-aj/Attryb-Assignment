const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  dealerId: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  modelName: {
    type: String,
    required: true,
  },
  yearOfModel: {
    type: Number,
    required: true,
  },
  listPrice: {
    type: Number,
    required: true,
  },
  availableColors: {
    type: [String],
    required: true,
  },
  mileage: {
    type: String,
    required: true,
  },
  power: {
    type: Number,
    required: true,
  },
  maxSpeed: {
    type: Number,
    required: true,
  },
  kmsOnOdometer: {
    type: Number,
    required: true,
  },
  majorScratches: {
    type: Boolean,
    required: true,
  },
  originalPaint: {
    type: Boolean,
    required: true,
  },
  numAccidentsReported: {
    type: Number,
    required: true,
  },
  numPreviousBuyers: {
    type: Number,
    required: true,
  },
  registrationPlace: {
    type: String,
    required: true,
  },
});

const MarketplaceInventory = mongoose.model(
  "Marketplace_Inventory ",
  vehicleSchema
);

module.exports = {
  MarketplaceInventory
};
