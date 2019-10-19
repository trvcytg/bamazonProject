console.log("***Credentials have been loaded***");

exports.mysqlKey = {
  host: process.env.HOST,
  user: process.env.USER1,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
};
exports.mysqlPassword = {
  password: process.env.PASSWORD
};
