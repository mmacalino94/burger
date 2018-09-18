//Having a hrd time with the connection and deploying the heroku link. My friend and I looked it over and everything should be ok.

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err)    {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);
});

module.exports = connection;