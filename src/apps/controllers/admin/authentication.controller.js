const login = (req, res) => {
  res.send("router /admin/login");
};
const logout = (req, res) => {
  res.send("router /admin/logout");
};
module.exports = {
  login,
  logout,
};
