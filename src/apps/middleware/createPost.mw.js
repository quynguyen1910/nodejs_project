const mongoose = require("mongoose");
const categoryModel = require("../models/category.model");

module.exports = async (req, res, next) => {
  let errorCheck = false;

  // name-product
  const name = req.body?.name;
  const patternName = /^[a-zA-Z0-9\s]*$/; //chữ hoa,thường,số và dấu cách
  if (!name) {
    req.flash("error", "Nhập tiêu đề sản phẩm");
    errorCheck = true;
  } else if (name.length > 50 || !patternName.test(name)) {
    req.flash("error", "Tiêu đề không hợp lệ");
    errorCheck = true;
  }
  //END name-product
  // price-product
  const price = req.body?.price;
  const patternPrice = /^\d+$/;
  if (!price) {
    req.flash("error", "Nhập Giá sản phẩm");
    errorCheck = true;
    res.redirect("back");
    return;
  } else if (parseInt(price) < 0 || !patternPrice.test(price)) {
    req.flash("error", "Giá sản phẩm không hợp lệ");
    errorCheck = true;
  }

  // //END price-product
  // xử lý ở multer.helper
  //END thumbnail-product

  // category product
  const cat_id = req.body.cat_id;
  if (!cat_id) {
    req.flash("error", "chưa chọn danh mục sản phẩm");
    errorCheck = true;
  } else if (!mongoose.Types.ObjectId.isValid(cat_id)) {
    req.flash("error", "DANH MỤC SẢN PHẨM KHÔNG HỢP LỆ");
    errorCheck = true;
  } else {
    const check = await categoryModel.findOne({ _id: cat_id });
    if (Object.keys(check).length === 0) {
      req.flash("error", "DANH MỤC SẢN PHẨM KHÔNG HỢP LỆ");
      errorCheck = true;
    }
  }
  //END category product
  //is_stock product
  const is_stock = req.body.is_stock;
  if (!is_stock) {
    req.flash("error", "chưa chọn trạng thái sản phẩm");
    errorCheck = true;
  } else if (is_stock != "true" && is_stock != "false") {
    req.flash("error", "trạng thái SẢN PHẨM KHÔNG HỢP LỆ");
    errorCheck = true;
  }
  //End is_stock product

  //featured product
  const featured = req.body.featured;
  if (featured === undefined) {
    req.body.featured = "false";
  } else if (featured != "true" && featured != "false") {
    req.flash("error", "sản phẩm nội bật KHÔNG HỢP LỆ");
    errorCheck = true;
  }

  //End featured product

  // thumbnail product
  if (req.file !== undefined) {
    req.body.thumbnail = req.originalname;
  } else {
    req.body.thumbnail = "preview-phone.png";
  }
  //END thumbnail product

  // Kiểm tra errorCheck để quyết định xử lý tiếp theo
  if (errorCheck) {
    // Nếu có lỗi, chuyển hướng về trang trước
    req.flash('error','CẬP NHẬT SẢN PHẨM THẤT BẠI')
    res.redirect("back");
  } else {
    // Nếu không có lỗi, tiếp tục xử lý tiếp theo
    next();
  }
};
