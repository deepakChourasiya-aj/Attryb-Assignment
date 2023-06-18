const express = require("express");
require("dotenv").config();
const { connection } = require("./Configuration/db");
const PORT = process.env.port||9000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "connection" });
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connection established http://localhost:8080/");
  } catch (error) {
    console.log(error.message);
  }
});
