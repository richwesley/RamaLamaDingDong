const mysql = require('mysql');
const express = require('express');

var connection = mysql.createConnection ({
   host: 'localhost',
   user: 'root',
   password: '',
})

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//   connection.query("CREATE DATABASE IF NOT EXISTS hardrock", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });

//   var sql = "CREATE TABLE IF NOT EXISTS artists (name CHAR(30), founded  YEAR(4), subgenre CHAR(30))";
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });

//   var sql = "INSERT INTO artists (name, founded, subgenre) VALUES?"
//   var values =
//   [
//     ['Deep Purple', 1968, 'Hard'],
//     ['Black Sabbath', 1968, 'Metal'],
//     ['Uriah Heep', 1969, 'Hard']
//   ];
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Records inserted");
//   });
// });

connection.destroy();