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
        //console.log(req.body)
      // If some error occurs, we throw an error.
        if (error) throw error;
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results)
    });
  });
});


// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/users so you can see the data.');
});