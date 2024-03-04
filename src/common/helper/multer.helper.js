const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/public/uploads/images/products");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const fileFilter = function (req, file, cb) {
  var typeArray = file.mimetype.split("/");
  var fileType = typeArray[1];
  if (fileType == "jpg" || fileType == "png" || fileType == "jpeg" || fileType == "webp") {
    cb(null, true);
  } else {
    req.flash('error','Định dạng ảnh không hợp lệ')
    req.flash('warning','Ảnh sản phẩm là ảnh mặc định')
    cb(null, false)
  }
};

module.exports = {
  storage,
  fileFilter,
};
