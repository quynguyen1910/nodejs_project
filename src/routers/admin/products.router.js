const productsController = require("../../apps/controllers/admin/products.controller");

// -----middleware-------
const createPostValidateMw = require("../../apps/middleware/createPost.mw");
// -----end-middleware-------

const multer = require("multer");
const multerHelper = require("../../common/helper/multer.helper");
const upload = multer({
  storage: multerHelper.storage,
  fileFilter: multerHelper.fileFilter,
}).single("thumbnail");

module.exports = (router) => {
  router.get("/admin/products", productsController.index);
  router.patch(
    "/admin/products/change-status/:prd_id/:is_stock",
    productsController.changeStatus
  );
  router.patch(
    "/admin/products/change-statusMulti",
    productsController.changeStatusMulti
  );

  router.delete("/admin/products/deleted/:prd_id", productsController.deleted);
  router.get("/admin/products/create", productsController.create);
  router.post(
    "/admin/products/createPost",
    upload,
    createPostValidateMw,
    productsController.createPost
  );
  router.get("/admin/products/edit-product/:prd_id", productsController.edit);
  router.post(
    "/admin/products/update-product/:prd_id",
    upload,
    createPostValidateMw,
    productsController.editPost
  );
};

// router.delete('/admin/products/deletePermanetly/:prd_id',productsController.deletePermanetly)
