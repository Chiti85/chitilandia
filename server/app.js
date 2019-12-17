require("dotenv").config();

const express = require("express");
const app = express();

require("./config/mongoose.config");
require("./config/debugger.config");
require("./config/middlewares.config")(app);
require("./config/locals.config");
require("./config/view-engine.config");
app.set("view engine", "handlebars");

app.use("/", require("./routes/index"));
app.use("/MPoint", require("./routes/api.routes"));
// CAMBIO

app.use((req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;
