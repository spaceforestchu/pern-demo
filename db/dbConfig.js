const pgp = require("pg-promise")();
require("dotenv").config();

const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
};

const db = pgp(cn);
console.log(pgp);
console.log("-----");
console.log(pgp(cn));
console.log("-----");
console.log(db);
db.connect()
  .then((obj) => {
    // Can check the server version here (pg-promise v10.1.0+):
    const serverVersion = obj.client.serverVersion;
    console.log("postgres connection established");
    obj.done(); // success, release the connection;
  })
  .catch((error) => {
    console.log("ERROR:", error.message || error);
  });

module.exports = db;
