const express = require("express");
const app = express();
const port = 4000;

app.use(require("./routers/brands.route.js"));
app.use(require("./routers/products.route.js"));

app.listen(4000, () => {
  console.log("Server started");
});