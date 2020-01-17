const knex = require("knex");

var kn = require("knex")({
  client: "postgres",
  connection: {
    host: "localhost",
    user: "bogdan.nedelcu",
    password: null,
    database: "bogdan.nedelcu"
  }
});

async function query() {
  console.log("----before----");
  await kn("cubejs")
    .where("id", 5)
    .del();
  await kn("cubejs")
    .where("id", 6)
    .del();
  const test = await kn.select("*").from("cubejs");
  console.log(test);

  const trx = await kn.transaction();

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
    throw Error("ooops");
    await trx.commit();
  } catch (e) {
    await trx.rollback();
  }

  console.log("----after----", await kn.select("*").from("cubejs"));
}

query();
