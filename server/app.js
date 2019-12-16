require("dotenv").config();

const express = require("express");
const app = express();

require("./config/mongoose.config");
require("./config/debugger.config");
require("./config/middlewares.config")(app);
require("./config/locals.config");
require("./config/view-engine.config");

app.use("/", require("./routes/index"));
app.use("/MPoint", require("./routes/api.routes"));
// CAMBIO

module.exports = app;
