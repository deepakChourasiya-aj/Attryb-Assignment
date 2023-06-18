// Load environment variables from .env 
const mongoose = require("mongoose"); 
require('dotenv').config();

console.log(process.env.mongoURL, 'mongourl'); // Logging the value of mongoURL environment variable

// Connect to the MongoDB database
const connection = mongoose.connect(process.env.mongoURL)
  .then(() => {
    console.log("Connected to the MongoDB database");
  })
  .catch((error) => {
    console.log('Connection error:', error);
  });

module.exports = {
  connection
};
