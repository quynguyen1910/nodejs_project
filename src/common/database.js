require('dotenv').config()
const mongoose = require("mongoose");

async function database() {
  await mongoose.connect(process.env.URL_ONLINE);
  console.log("database is connected");
}

module.exports.connect = database
