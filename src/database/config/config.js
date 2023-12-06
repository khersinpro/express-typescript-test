require('dotenv').config();

module.exports = { 
  dialect: "mysql", 
  host: "localhost", 
  username: "root", 
  password: "", 
  database: "testTs", 
  logging: false, // Disables logging of SQL queries
  models: []
};