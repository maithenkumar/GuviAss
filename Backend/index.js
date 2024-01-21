const express = require("express");
const app = express();
const db = require("./db/db");
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");
const authRoutes = require("./Routes/authRoutes");

db();
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/auth", authRoutes);
app.use("/", (req, res) => {
  return res.json({ message: "this message from maitheen!!.." });
});
app.listen(PORT, () => {
  console.log(`this server running  ${PORT} ... `);
});
