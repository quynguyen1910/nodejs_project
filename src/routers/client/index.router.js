module.exports = (router) => {
  router.get("/", (req, res) => {
    res.send("router client");
  });
};
