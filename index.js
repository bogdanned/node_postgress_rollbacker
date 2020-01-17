const db = require("./db").default;

async function query() {
  console.log("----before----");
  await db("cubejs")
    .where("id", 5)
    .del();
  await db("cubejs")
    .where("id", 6)
    .del();
  const test = await db.select("*").from("cubejs");
  console.log(test);

  const trx = await db.transaction();

  try {
    await trx("cubejs").insert({
      id: 5,
      name: "trx1",
      account_balance: 23,
      debt: 0
    });

    await trx("cubejs").insert({
      id: 6,
      name: "trx2",
      account_balance: 2,
      debt: 123
    });
    // throw Error("ooops");
    await trx.commit();
  } catch (e) {
    await trx.rollback();
  }

  console.log("----after----", await db.select("*").from("cubejs"));
}

query();
