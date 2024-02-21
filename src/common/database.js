const mongoose = require("mongoose");

async function database() {
  await mongoose.connect("mongodb://127.0.0.1:27017/myproject_db");
  console.log("database is connected");
}

module.exports.connect = database
