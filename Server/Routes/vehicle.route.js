const express = require("express");
const jwt = require("jsonwebtoken");
const { cloudinary } = require("../Configuration/cloudinary");
const {
  MarketplaceInventory,
} = require("../Models/marketPlaceInventory.model");
const { authenticator } = require("../Middlewares/authenticator");
const { upload } = require("./multer.route");
const { OEMSpecs } = require("../Models/oemSpecs.model");

const vehicleRouter = express.Router();
vehicleRouter.post(
  "/upload",
  authenticator,
  upload.single("image"),
  async (req, res) => {
    await cloudinary.uploader.upload(
      req.file.path,
      async function (err, result) {
        if (err) {
          console.log(err);
          return res.send({ msg: "error uploading" });
        }
        const findSpecification = await OEMSpecs.findOne({
          modelName: req.body.modelName,
        });
        console.log(findSpecification);

        const {
          yearOfModel,
          listPrice,
          availableColors,
          mileage,
          power,
          maxSpeed,
        } = findSpecification;
        if (!findSpecification) {
          return res.send({ msg: "specification not find" });
        }
        const token = req.headers.authorization || req.cookies.token;
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded, "decode");
        const {
          title,
          modelName,
          description,
          kmsOnOdometer,
          majorScratches,
          originalPaint,
          numAccidentsReported,
          numPreviousBuyers,
          registrationPlace,
        } = req.body;
        const newInventoryItem = new MarketplaceInventory({
          dealerId: decoded.userID,
          imageUrl: result.url,
          title,
          description,
          modelName,
          yearOfModel,
          listPrice,
          availableColors,
          mileage,
          power,
          maxSpeed,
          kmsOnOdometer,
          majorScratches,
          originalPaint,
          numAccidentsReported,
          numPreviousBuyers,
          registrationPlace,
        });

        let saved = await newInventoryItem.save();

        res.send({ msg: "success uploaded", saved, result });
      }
    );
  }
);
vehicleRouter.delete("/vehicle/:id", async (req, res) => {
  try {
    let find = await MarketplaceInventory.findByIdAndDelete({
      _id: req.params.id,
    });
    res.send({ msg: "success deleted", find });
  } catch (error) {
    res.send({ msg: "error deleting" });
    console.log(error);
  }
});

// o Create filters on Price, Colors, and Mileage.
vehicleRouter.get("/vehicle", async (req, res) => {
  try {
    const token = req.headers.authorization || req.cookies.token;
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    let order = req.query;
    if (order.sort == "asc") {
      let vehicle = await MarketplaceInventory.find().sort({ listPrice: 1 });
      return res.status(200).json({ msg: "products asc order", data: vehicle });
    } else if (order.sort == "desc") {
      let vehicle = await MarketplaceInventory.find().sort({ listPrice: -1 });
      return res.status(200).json({ msg: "vehicle desc order", data: vehicle });
    } else if (order.mileage) {
      let vehicle = await MarketplaceInventory.find({
        mileage: parseInt(order.mileage),
      });
      return res
        .status(200)
        .json({ msg: "vehicle according to sorted order", data: vehicle });
    } else if (order.color) {
      let vehicle = await MarketplaceInventory.find({
        availableColors: order.color,
      });
      return res
        .status(200)
        .json({ msg: "vehicle according to color", data: vehicle });
    }
    console.log(decoded.userID);
    const vehicle = await MarketplaceInventory.find({
      dealerId: decoded.userID,
    });
    // const vehicle = await MarketplaceInventory.find({});
    res.send({ msg: "All vehicle", data: vehicle });
  } catch (error) {
    console.log(error);
    res.send({ msg: error.message });
  }
});

vehicleRouter.get("/vehicle/all", async (req, res) => {
  try {
    const vehicle = await MarketplaceInventory.find({});
    res.send({ msg: "All vehicle", data: vehicle });
  } catch (error) {
    console.log(error);
    res.send({ msg: error.message });
  }
});

vehicleRouter.get("/vehicle/:id", async (req, res) => {
  try {
    const vehicle = await MarketplaceInventory.find({ _id: req.params.id });
    res.send({ msg: "All vehicle ", data: vehicle });
  } catch (error) {
    console.log(error);
    res.send({ msg: error.message });
  }
});

vehicleRouter.patch("/vehicle/:id", async (req, res) => {
  try {
    let find = await MarketplaceInventory.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.send({ msg: "successfully updated", find });
  } catch (error) {
    res.send({ msg: "error deleting" });
    console.log(error);
  }
});

module.exports = {
  vehicleRouter,
};
