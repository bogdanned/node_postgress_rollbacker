module.exports.default = async (req, res, next) => {
  try {
    await res.trx("cubejs").insert({
      id: 6,
      name: "trx2",
      account_balance: 2,
      debt: 123
    });
    // throw Error();
    await res.trx.commit();
  } catch (e) {
    res.trx.rollback();
  }

  next();
};
