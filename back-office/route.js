const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { response } = require('express');


const connection = mysql.createPool({
    host: 'localhost',
    user: 'sserver',
    password: 'sserver',
    database: 'tia_asa'
});

const app = express();


app.get('/ecole', function (req, res) {
    connection.getConnection(function (err, connection) {
    connection.query('SELECT * FROM FORMATION WHERE ecole="ESTI"', function (error, results, fields) {
      // If some error occurs, we throw an error.
        if (error) throw error;
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results)
    });
  });
});


// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/ecole so you can see the data.');
});


