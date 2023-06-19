const express = require("express");
const {
  MarketplaceInventory,
} = require("../Models/marketPlaceInventory.model");


const accessRouter = express.Router();
accessRouter.get("/vehicle/all", async (req, res) => {
    try {
      const vehicle = await MarketplaceInventory.find({});
      res.send({ msg: "All vehicle", data: vehicle });
    } catch (error) {
      console.log(error);
      res.send({ msg: error.message });
    }
  });

module.exports = {
    accessRouter
}