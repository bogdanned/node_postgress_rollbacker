module.exports.default = async (req, res, next) => {
  await res.trx("cubejs").insert({
    id: 5,
    name: "trx1",
    account_balance: 23,
    debt: 0
  });

  next();
};
