const express = require("express");
require("dotenv").config();
const { connection } = require("./Configuration/db");
const { User } = require("./Models/user.model");
const PORT = process.env.port || 9000;
const bcrypt = require("bcrypt");
const jwt =require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { userRoute } = require("./Routes/user.route");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send({ msg: "Welcome to buyCars" });
});

app.use("/",userRoute);
app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Connection established http://localhost:${PORT}/`);
  } catch (error) {
    console.log(error.message);
  }
});
