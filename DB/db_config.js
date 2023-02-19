const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.Passwrod,
    port: process.env.DBPORT,
    database: process.env.DATABASE
});

connection.connect(function (err) {
    if (err) throw (err);
    console.log("Database connected Successfully!!");
});



module.exports = connection;