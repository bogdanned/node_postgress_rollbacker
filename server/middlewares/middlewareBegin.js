module.exports.default = async (req, res, next) => {
  const trxProvider = res.db.transactionProvider();
  const trx = await trxProvider();

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
