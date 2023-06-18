const express = require("express");
require("dotenv").config();
const { connection } = require("./Configuration/db");
const { User } = require("./Models/user.model");
const PORT = process.env.port || 9000;
const cookieParser = require("cookie-parser");
const { userRoute } = require("./Routes/user.route");
const { OEMSpecs } = require("./Models/oemSpecs.model");
const { oemSpecRouter } = require("./Routes/oemSpecs.route");
const cors = require("cors");
const { cloudinary } = require("./Configuration/cloudinary");
const { upload } = require("./Routes/multer.route");
const { MarketplaceInventory } = require("./Models/marketPlaceInventory.model");
const { authenticator } = require("./Middlewares/authenticator");
const { vehicleRouter } = require("./Routes/vehicle.route");
const jwt = require("jsonwebtoken");
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.get("/",(req,res)=>{
  res.send({msg:"Welcomeq to attry"})
})
app.use("/", oemSpecRouter);
app.use("/", userRoute);
app.use(authenticator);
app.use("/", vehicleRouter);

// app.post("/upload", authenticator, upload.single("image"), async (req, res) => {
//   await cloudinary.uploader.upload(req.file.path, async function (err, result) {
//     if (err) {
//       console.log(err);
//       return res.send({ msg: "error uploading" });
//     }
//     const findSpecification = await OEMSpecs.findOne({
//       modelName: req.body.modelName,
//     });
//     const {
//       yearOfModel,
//       listPrice,
//       availableColors,
//       mileage,
//       power,
//       maxSpeed,
//     } = findSpecification;
//     if (!findSpecification) {
//       return res.send({ msg: "specification not find" });
//     }
//     const token = req.headers.authorization || req.cookies.token;
//     let decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(decoded, "decode");
//     const {
//       title,
//       modelName,
//       description,
//       kmsOnOdometer,
//       majorScratches,
//       originalPaint,
//       numAccidentsReported,
//       numPreviousBuyers,
//       registrationPlace,
//     } = req.body;
//     const newInventoryItem = new MarketplaceInventory({
//       dealerId: decoded.userID,
//       imageUrl: result.url,
//       title,
//       description,
//       modelName,
//       yearOfModel,
//       listPrice,
//       availableColors,
//       mileage,
//       power,
//       maxSpeed,
//       kmsOnOdometer,
//       majorScratches,
//       originalPaint,
//       numAccidentsReported,
//       numPreviousBuyers,
//       registrationPlace,
//     });

//     let saved = await newInventoryItem.save();

//     res.send({ msg: "success uploaded", saved, result });
//   });
// });
// app.delete("/vehicle/:id", async (req, res) => {
//   try {
//     let find = await MarketplaceInventory.findByIdAndDelete({
//       _id: req.params.id,
//     });
//     res.send({ msg: "success deleted", find });
//   } catch (error) {
//     res.send({ msg: "error deleting" });
//     console.log(error);
//   }
// });
// app.get("/vehicle", async (req, res) => {
//   try {
//     const vehicle = await MarketplaceInventory.find({});
//     res.send({ msg: "All vehicle ", data: vehicle });
//   } catch (error) {
//     console.log(error);
//     res.send({ msg: error.message });
//   }
// });
// app.get("/vehicle/:id", async (req, res) => {
//   try {
//     const vehicle = await MarketplaceInventory.find({ _id: req.params.id });
//     res.send({ msg: "All vehicle ", data: vehicle });
//   } catch (error) {
//     console.log(error);
//     res.send({ msg: error.message });
//   }
// });
// app.patch("/vehicle/:id", async (req, res) => {
//   try {
//     let find = await MarketplaceInventory.findByIdAndUpdate(
//       { _id: req.params.id },
//       req.body
//     );
//     res.send({ msg: "successfully updated", find });
//   } catch (error) {
//     res.send({ msg: "error deleting" });
//     console.log(error);
//   }
// });

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Connection established http://localhost:${PORT}/`);
  } catch (error) {
    console.log(error.message);
  }
});
