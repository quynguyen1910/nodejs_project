const express = require("express");
const app = express();
const router = require("../routers/web");

// -----------------------------------------------------
app.use(router);
module.exports = app;
