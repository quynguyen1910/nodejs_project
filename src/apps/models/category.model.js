const mongoose = require('mongoose');
const { Schema } = mongoose;
const categorySchema =new Schema({
  title: {
      type: String,
      required: true,
  },
  description: {
      type: String,
      default: null,
  },
  slug: {
      type: String,
      required: true,
  },
}, {
  timestamps: true,
});

const CategoryModel = mongoose.model("Category", categorySchema, "categories");
module.exports = CategoryModel;
