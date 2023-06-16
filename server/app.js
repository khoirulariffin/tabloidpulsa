if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const router = require("./routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", router);

module.exports = app;
