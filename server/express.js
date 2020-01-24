const express = require("express");
const db = require("../db").default;

const transactionEndpoint = require("./transactionEndpoint");

const app = express();

app.use((_req, res, next) => {
  res.db = db;
  next();
});

app.get("/test", transactionEndpoint.default);

app.listen(3000, () => console.log("Running on port 3000"));
