const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const connection = mysql.createPool({
    host: 'localhost',
    user: 'sserver',
    password: 'sserver',
    database: 'foyer'
});

const app = express();


app.get('/users', function (req, res) {
    connection.getConnection(function (err, connection) {
    connection.query('SELECT * from Membre', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
  });
});

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/users so you can see the data.');
});