require("./config/config");

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const { mongoose } = require("./db/mongoose");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

const routes = require("./routes");

routes(app);

module.exports = app
