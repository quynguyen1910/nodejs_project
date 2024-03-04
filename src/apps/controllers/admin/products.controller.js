const multer = require("multer"); //để upload ảnh
const slug = require("slug");
// -----model-------
const productModel = require("../../models/products.model");
const categoryModel = require("../../models/category.model");
const commentModel = require("../../models/comment.model");
// -----helper-------
const paginationHelper = require("../../../common/helper/pagination.helper");
const formFilterHelper = require("../../../common/helper/formFilter.helper");
const { default: mongoose } = require("mongoose");

// ----controllers---------
const index = async (req, res) => {
  const messageAlert = req.flash();
  let find = { deleted: false };
  // -----form filter-------------
  let filterFormData = formFilterHelper(req.query);
  if (filterFormData.find) {
    find = { ...find, ...filterFormData.find };
  }
  // -----pagination-------------
  const productsAll = await productModel.countDocuments(find);
  const paginationData = paginationHelper(productsAll, +req.query.page);
  // --------------categories-------
  const categories = await categoryModel.find();
  // --------------products---------
  const products = await productModel
    .find(find)
    .populate("cat_id")
    .skip(paginationData.skip)
    .limit(paginationData.limit)
    .sort({ _id: -1 });
  res.render("./admin/product", {
    pageTitle: "VietPro-Products",
    products,
    categories,
    paginationData,
    find,
    filterFormData,
    messageAlert,
  });
};
const changeStatus = async (req, res) => {
  const { prd_id, is_stock } = req.params;
  await productModel.updateOne({ _id: prd_id }, { is_stock: is_stock });
  req.flash("success", "CẬP NHẬT THÀNH CÔNG!");
  res.redirect("back");
};
const changeStatusMulti = async (req, res) => {
  try {
    const prd_ids = req.body.prd_ids.split(",");
    const type_edit = req.body.type_edit;
    const edit = {};

    switch (type_edit) {
      case "true":
        edit.is_stock = "true";
        break;
      case "false":
        edit.is_stock = "false";
        break;
      case "deleted":
        edit.deleted = "true";
        edit.deleteAt = new Date();
        break;
      default:
        break;
    }

    // Thực hiện cập nhật nhiều tài liệu
    await productModel.updateMany(
      {
        _id: { $in: prd_ids },
      },
      {
        $set: {
          ...edit,
        },
      }
    );
    req.flash("success", "CẬP NHẬT THÀNH CÔNG!");
    res.redirect("back");
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Đã xảy ra lỗi", error });
  }
};
const deletePermanetly = async (req, res) => {
  const { prd_id } = req.params;
  await productModel.deleteOne({ _id: prd_id });
  res.redirect("back");
};
const deleted = async (req, res) => {
  const { prd_id } = req.params;
  await productModel.updateOne(
    { _id: prd_id },
    { deleted: "true", deleteAt: new Date() }
  );
  req.flash("success", "XÓA SẢN PHẨM THÀNH CÔNG!");

  res.redirect("back");

 
};
const create = async (req, res) => {
  const messageAlert = req.flash();
  const categories = await categoryModel.find({});
  res.render("./admin/add_product", {
    pageTitle: "create product",
    messageAlert,
    categories,
  });
};
const createPost = async (req, res) => {
  const newProductData = {
    cat_id: req.body.cat_id,
    thumbnail: req?.file?.filename || "preview-phone.png",
    description: req.body.description,
    price: parseInt(req.body.price),
    status: req.body.status,
    featured: req.body.featured == "true",
    promotion: req.body.promotion,
    warranty: req.body.warranty,
    accessories: req.body.accessories,
    is_stock: req.body.is_stock == "true",
    name: req.body.name,
    slug: slug(req.body.name),
  };

  const newProduct = new productModel(newProductData);
  await newProduct.save();
  // res.redirect("/admin/products");
  req.flash("success", "thêm sản phẩm thành công");
  res.redirect("back");
};

const edit = async (req, res) => {
  const messageAlert = req.flash();
  const product = await productModel.findOne({ _id: req.params.prd_id });

  const categories = await categoryModel.find({});
  res.render("./admin/edit_product", {
    pageTitle: "create product",
    messageAlert,
    product,
    categories,
  });
};

const editPost = async (req, res) => {
  const { prd_id } = req.params;
  const productUpdateData = {
    cat_id: req.body.cat_id,
    description: req.body.description,
    price: parseInt(req.body.price),
    status: req.body.status,
    featured: req.body.featured == "true",
    promotion: req.body.promotion,
    warranty: req.body.warranty,
    accessories: req.body.accessories,
    is_stock: req.body.is_stock == "true",
    name: req.body.name,
    slug: slug(req.body.name),
  };

  if (req.file?.filename) {
    productUpdateData.thumbnail = req.file.filename;
  }

  try {
    await productModel.updateOne({ _id: prd_id }, productUpdateData);
    req.flash("success", "CẬP NHẬT SẢN PHẨM THÀNH CÔNG!");
    res.redirect("back");
  } catch (error) {
    req.flash("error", "CẬP NHẬT SẢN PHẨM THẤT BẠI!");
    res.redirect("back");
  }
};

module.exports = {
  index,
  changeStatus,
  changeStatusMulti,
  // deletePermanetly,
  deleted,
  create,
  createPost,
  edit,
  editPost,
};
