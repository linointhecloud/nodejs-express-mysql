module.exports = {
  HOST: "localhost",
  DBUSER: "root",
  DBPASSWORD: "root",
  DBNAME: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};