const express = require("express");
const router = express.Router();
// ----------import admin-----------------------
const prodAdmin_Ctrl = require("../apps/controllers/admin/products.controller");

// -----middleware-------
const createPostValidateMw = require("../apps/middleware/createPost.mw");
// -----end-middleware-------

const multer = require("multer");
const multerHelper = require("../common/helper/multer.helper");
const upload = multer({
  storage: multerHelper.storage,
  fileFilter: multerHelper.fileFilter,
}).single("thumbnail");
// ---------- END import admin-----------------------
// ---------- import client-----------------------
const prodClient_Ctrl = require('../apps/controllers/client/products.controller')
// ---------- END import client-----------------------
// --------------------------admin------------------------------------
// index
router.get("/admin", (req, res) => {
  res.render("router admin");
});

// products
router.get("/admin/products", prodAdmin_Ctrl.index);
router.patch(
  "/admin/products/change-status/:prd_id/:is_stock",
  prodAdmin_Ctrl.changeStatus
);
router.patch(
  "/admin/products/change-statusMulti",
  prodAdmin_Ctrl.changeStatusMulti
);

router.delete("/admin/products/deleted/:prd_id", prodAdmin_Ctrl.deleted);
router.get("/admin/products/create", prodAdmin_Ctrl.create);
router.post(
  "/admin/products/createPost",
  upload,
  createPostValidateMw,
  prodAdmin_Ctrl.createPost
);
router.get("/admin/products/edit-product/:prd_id", prodAdmin_Ctrl.edit);
router.post(
  "/admin/products/update-product/:prd_id",
  upload,
  createPostValidateMw,
  prodAdmin_Ctrl.editPost
);
// --------------------------END admin------------------------------------
// --------------------------Client------------------------------------
router.get("/", prodClient_Ctrl.index);
router.get("/product/:prd_id", prodClient_Ctrl.details);

// --------------------------END Client------------------------------------

module.exports = router;
