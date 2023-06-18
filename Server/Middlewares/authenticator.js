const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const authenticator = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization ;
  console.log(token, "token");
  try {
    if (token) {
      let decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded) {
        console.log(decoded.userID, "userid.");
         req.body.user_id = decoded.userID;
         req.body.role = decoded.role;
        next();
      } else {
        return res.send({ msg: "Invalid token" });
      }
    }
  } catch (error) {
    res.send({ msg: "Please Login first" });
    console.log(error);
  }
};
module.exports = {
  authenticator
};
