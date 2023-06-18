const mongoose = require("mongoose");

/**
 * Defines the schema for a OEM_Specs object.
 */
const OEMSpecsSchema = mongoose.Schema(
  {
    modelName: { type: String, required: true },
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
  },
  { versionKey: "version" }
);

/**
 * Represents a OEM_Specs in the database.
 */
const OEMSpecs = mongoose.model("OEM_Specs", OEMSpecsSchema);

module.exports = {
    OEMSpecs,
};
