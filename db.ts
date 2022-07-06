import { Database } from "bun:sqlite";

const db = new Database("mydb.sqlite");

const log = (...result) => console.debug(...result);

db.run(
  "CREATE TABLE IF NOT EXISTS foo (id INTEGER PRIMARY KEY AUTOINCREMENT, greeting TEXT)"
);
db.run("INSERT INTO foo (greeting) VALUES (?)", "Welcome to bun!");
db.run("INSERT INTO foo (greeting) VALUES (?)", "Hello World!");

// get the first row
log("get first row", db.query("SELECT * FROM foo").get());
// { id: 1, greeting: "Welcome to bun!" }

// get all rows
log("get all rows", db.query("SELECT * FROM foo").all().length);
// [
//   { id: 1, greeting: "Welcome to bun!" },
//   { id: 2, greeting: "Hello World!" },
// ]

// get all rows matching a condition
log(
  'WHERE greeting LIKE "%bun%"',
  db.query('SELECT * FROM foo WHERE greeting LIKE "%bun%"').all("bun")
);
// [
//   { id: 1, greeting: "Welcome to bun!" },
// ]

// get first row matching a named condition
log(
  'greeting = $greeting"',
  db.query("SELECT * FROM foo WHERE greeting = $greeting").get({
    $greeting: "Welcome to bun!",
  })
);
// [
//   { id: 1, greeting: "Welcome to bun!" },
// ]
