// brings in mysql package
var mysql = require("mysql");

// holds mysql connection to database
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

// function that outputs error or returns connection id
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// returns the connection object
module.exports = connection;