const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const router = express.Router();

const app = express();

const dotenv = require("dotenv");
dotenv.config();
const env = process.env.NODE_ENV || "development";
const config = require("./config")[env];

//Parsing Request Body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//DB Connection
mongoose.connect(config.database.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("DB Connected!!..");
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});

module.exports = app;
