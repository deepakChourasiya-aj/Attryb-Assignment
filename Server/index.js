const express = require("express");
require("dotenv").config();
const { connection } = require("./Configuration/db");
const PORT = process.env.port || 9000; // Port number for the server
const cookieParser = require("cookie-parser");
const { userRoute } = require("./Routes/user.route");
const { oemSpecRouter } = require("./Routes/oemSpecs.route");
const cors = require("cors");
const { authenticator } = require("./Middlewares/authenticator");
const { vehicleRouter } = require("./Routes/vehicle.route");
const { accessRouter } = require("./Routes/access.route");
const app = express();

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser()); // Parse cookies

// Default route
app.get("/", (req, res) => {
  res.send({ msg: "Welcome to attry" });
});

// Routes
app.use("/",accessRouter) // Route for general access
app.use("/", oemSpecRouter); // Route for OEM specifications
app.use("/", userRoute); // Route for user-related functionality
app.use(authenticator); // Middleware for authentication
app.use("/", vehicleRouter); // Route for vehicles

// Start the server
app.listen(PORT, async () => {
  try {
    await connection; // Connect to the database
    console.log(`Server is running at http://localhost:${PORT}/`);
  } catch (error) {
    console.log(error.message);
  }
});
