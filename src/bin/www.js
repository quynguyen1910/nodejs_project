const config = require("config");
require("dotenv").config();
const app = require(config.get("apps.URL_APPS"));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
