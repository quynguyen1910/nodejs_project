const productsRouter = require("./products.router");
const authenticationRouter = require("./authentication.router");
const index = (router) => {
  router.get("/admin", (req, res) => {
    res.send("router admin");
  });
};
module.exports = (router) => {
  index(router);
  authenticationRouter(router);
  productsRouter(router);
};
