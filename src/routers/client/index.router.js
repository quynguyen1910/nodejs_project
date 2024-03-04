const indexController = require('../../apps/controllers/client/products.controller')
const productsRouter = require("./products.router");
module.exports = (router) => {
  router.get("/", indexController.index);
};
module.exports = (router) => {
  index(router);
  productsRouter(router);
};