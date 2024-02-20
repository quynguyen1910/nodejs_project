const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("structure project success");
});

module.exports = router;
