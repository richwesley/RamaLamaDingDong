const mysql = require('mysql');
const express = require('express');
const Table = require('cli-table');
const number = require('accounting')

var connection = mysql.createConnection ({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'hardrock'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var bands = function() {
  connection.query('SELECT * FROM artists', function (error, response){
    var table = new Table ({
      head: ['Name', 'Year Founded', 'Subgenre']
    });
    for (var index = 0; index < response.length; index++) {
      table.push([response[i].name, response[i].founded, response[i].subgenre])   
    }
    console.log(table.toString());
  })
}
connection.end();