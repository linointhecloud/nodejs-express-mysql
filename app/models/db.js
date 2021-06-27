const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
//import dbConfig from ("../config/db.config.js");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME
  //host: dbConfig.HOST,
  //user: dbConfig.DBUSER,
  //password: dbConfig.DBPASSWORD,
  //database: dbConfig.DBNAME
})

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connect to the database");
});

module.exports = connection;