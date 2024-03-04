const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchemal = new Schema(
  {
    email: {
      type: String,
    },
    prd_id: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    body: String,
    full_name: String,
  },
  { timestamps: true }
);
const commentModel = mongoose.model("Comment", commentSchemal, "comments");
module.exports = commentModel;
