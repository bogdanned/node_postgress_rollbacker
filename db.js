module.exports.default = require("knex")({
  client: "postgres",
  connection: {
    host: "localhost",
    user: "bogdan.nedelcu",
    password: null,
    database: "bogdan.nedelcu"
  }
});
