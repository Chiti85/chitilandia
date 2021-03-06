require("dotenv").config();
require("hbs");
const express = require("express");
const app = express();
const path = require("path");

require("./config/mongoose.config");
require("./config/debugger.config");
require("./config/middlewares.config")(app);
require("./config/locals.config");

app.use(express.static(path.join(__dirname, "public")));

// app.use("/", require("./routes/api.routes"));
app.use("/MPoint", require("./routes/api.routes"));
// CAMBIO

app.use((req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;
