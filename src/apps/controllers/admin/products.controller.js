const productModel = require("../../models/products.model");
const categoryModel = require("../../models/category.model");
const index = async (req, res) => {
  const products = await productModel.find().populate("cat_id").limit(1);
  res.render("./admin/product");
};
module.exports = {
  index,
};
