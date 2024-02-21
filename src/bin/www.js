const app = require("../apps/app");
const config = require("config");
const port = config.get("apps.PORT");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
