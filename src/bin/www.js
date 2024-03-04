require('dotenv').config()
const app = require("../apps/app");

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
