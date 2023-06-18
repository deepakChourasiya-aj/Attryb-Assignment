
const express= require("express");
const { OEMSpecs } = require("../Models/oemSpecs.model");
const oemSpecRouter = express.Router();
// Route for adding a new OEM specification
oemSpecRouter.post("/specs", async (req, res) => {
    try {
      const {
        modelName,
        yearOfModel,
        listPrice,
        availableColors,
        mileage,
        power,
        maxSpeed,
      } = req.body;
  
      const newModel = new OEMSpecs({
        modelName,
        yearOfModel,
        listPrice,
        availableColors,
        mileage,
        power,
        maxSpeed,
      });
  
      await newModel.save();
      res
        .status(201)
        .json({ message: "New OEM specification added successfully", newModel });
    } catch (error) {
      console.error("Error saving OEM specification:", error);
      res.status(500).json({ message: "Error saving OEM specification" });
    }
  });
  
  // Route for retrieving all available OEM specifications
  oemSpecRouter.get("/specs", async (req, res) => {
    try {
      const availableOEMs = await OEMSpecs.find({});
      res.json({ message: "All available OEMs", availableOEMs });
    } catch (error) {
      console.error("Error retrieving OEM specifications:", error);
      res.status(500).json({ message: "Error retrieving OEM specifications" });
    }
  });

  module.exports = {
    oemSpecRouter
  }