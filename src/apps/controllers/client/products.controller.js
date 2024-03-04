// ------IMPORT model----------
const productsModel = require("../../models/products.model");
const categoryModel = require("../../models/category.model");
const commentModel = require("../../models/comment.model");
// ------IMPORT helper----------
const pagination = require('../../../common/helper/pagination.helper')


const index = async (req, res) => {
  const messageAlert = req.flash();
  const categories = await categoryModel.find();

  const productsFeatured = await productsModel
    .find({
      deleted: false,
      featured: true,
    })
    .limit(6);
  const productsLatest = await productsModel
    .find({ deleted: false })
    .sort({ _id: -1 })
    .limit(6);

  res.render("./client/index", {
    pageTitle: "Home-Shop",
    messageAlert,
    categories,
    productsFeatured,
    productsLatest,
  });
};
const details = async (req, res) => {
  const moment = require('moment');
  const messageAlert = req.flash();
  const id = req.params.prd_id;
  //pagination
  const commentAll = await commentModel.countDocuments({ prd_id: id });
  const paginationData = pagination(commentAll,req.query.page)
  //END pagination

  const categories = await categoryModel.find();

  try {
    const product = await productsModel.findById(id);
    const comments = await commentModel.find({ prd_id: id }).limit(paginationData.limit).skip(paginationData.skip).sort({_id:-1});

    res.render("./client/product", {
      moment,
      pageTitle: "product-Shop",
      categories,
      product,
      comments,
      paginationData,
    });
  } catch (error) {
    req.flash("error", "không tìm thấy sản phẩm");
    res.redirect("back");
  }
};

module.exports = {
  index,
  details,
};
