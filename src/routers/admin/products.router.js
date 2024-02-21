const productsController = require("../../apps/controllers/admin/products.controller");
module.exports = (router) => {
  router.get("/admin/products", productsController.index);
};
