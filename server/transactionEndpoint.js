const middlewareBegin = require("./middlewares/middlewareBegin");
const middlewareOne = require("./middlewares/middlewareOne");
const middlewareTwo = require("./middlewares/middlewareTwo");
const middlewareCommit = require("./middlewares/middlewareCommit");

module.exports.default = [
  middlewareBegin.default,
  middlewareOne.default,
  middlewareTwo.default,
  middlewareCommit.default,
  async (req, res, next) => {
    console.log(await res.db.select("*").from("cubejs"));

    res.send(200);
  }
];
