const authenticationController = require("../../apps/controllers/admin/authentication.controller");
module.exports = (router) => {
  router.get("/admin/login", authenticationController.login);
  router.get("/admin/logout", authenticationController.logout);
};
