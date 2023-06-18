const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { User } = require("../Models/user.model");
const userRoute = express.Router();

userRoute.post("/register", async (req, res) => {
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

userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Input validation -/check that email and password are present in  body
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required." });
    }
    // Check the user in the database
    const findUser = await User.findOne({ email });
    if (findUser) {
      const passwordMatches = await bcrypt.compare(password, findUser.password);
      if (passwordMatches) {
        // generate a JWT token
        const token = jwt.sign(
          { userID: findUser._id, role: findUser.role },
          process.env.JWT_SECRET
        );
        // set the token in a cookie
        const cookieOptions = {
          httpOnly: true,
          maxAge: process.env.COOKIE_MAX_AGE,
        };
        res.cookie("token", token, cookieOptions);
        return res.status(200).json({
          msg: "Login successful",
          name: findUser.name,
          role: findUser.role,
          token,
        });
      }
    }
    // Send a failed login response if the user could not be authenticated
    return res.status(401).json({ msg: "Invalid email or password." });
  } catch (error) {
    // Log any errors and send a server error response
    console.error("Error in login", error);
    return res.status(500).json({ msg: "Server error" });
  }
});

module.exports = {
  userRoute,
};
