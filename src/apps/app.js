const express = require("express");
const app = express();
const router = require("../routers/web");
const config = require("config");
// -----------database---------------
const database = require('../common/database')
database.connect()

// -----------template engine EJS---------------

app.set("views", config.get("apps.VIEWS_FOLDER"));
app.set("view engine", config.get("apps.NAME_ENGINE"));

// -----------------------------------------------------
app.use("/static", express.static(config.get("apps.STATIC_FOLDER")));
app.use(router);
module.exports = app;
