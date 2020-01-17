module.exports.default = async (req, res, next) => {
  const trx = await res.db.transaction();
  res.trx = trx;

  console.log("----before----");
  await res
    .db("cubejs")
    .where("id", 5)
    .del();
  await res
    .db("cubejs")
    .where("id", 6)
    .del();
  const test = await res.db.select("*").from("cubejs");
  console.log(test);

  next();
};
