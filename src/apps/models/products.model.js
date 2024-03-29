const mongoose = require("mongoose");
// const slug = require("mongoose-slug-updater");
// mongoose.plugin(slug);

const { Schema } = mongoose;
const productSchema = new Schema(
  {
    cat_id: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    thumbnail: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: null,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    promotion: {
      type: String,
      default: null,
    },
    warranty: {
      type: String,
      default: null,
    },
    accessories: {
      type: String,
      default: null,
    },
    is_stock: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    deleteAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("Product", productSchema, "products");
module.exports = ProductModel;
