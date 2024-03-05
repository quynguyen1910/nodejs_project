require("dotenv").config();
// const app = require(config.get("apps.URL_APPS"));
const app = require(`${__dirname}/src/apps/app.js`);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
