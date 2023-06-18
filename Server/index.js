const express = require("express");
require("dotenv").config();
const { connection } = require("./Configuration/db");
const { User } = require("./Models/user.model");
const PORT = process.env.port || 9000;
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "connection" });
});

app.post("/register", async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
      // Input validation - check that name, email, and password are present in the request body
      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ message: "Name, email, and password are required." });
      }
      // Hash the user's password
      const hashedPassword = await bcrypt.hash(password, 5);
      // Create a new user
      const user = new User({ name, email, password: hashedPassword, role });
      const newUser = await user.save();
      res.status(200).send({ message: "Account created successfully", newUser });
    } catch (error) {
      console.error("Error in registering", error);
      return res.status(500).json({ message: "Server error" });
    }
  });
app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Connection established http://localhost:${PORT}/`);
  } catch (error) {
    console.log(error.message);
  }
});
