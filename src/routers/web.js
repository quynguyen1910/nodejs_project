const express = require("express");
const router = express.Router();
const routerClient = require("./client/index.router");
const routerAdmin = require("./admin/index.router");

routerClient(router);
routerAdmin(router);

module.exports = router;
