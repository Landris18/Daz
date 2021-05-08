const url = require('./conf').url
const dbName = require('./conf').dbName

const express = require('express');
const bodyParser = require('body-parser');  
const app = express()
const MongoClient = require('mongodb').MongoClient;
let db

app.use(bodyParser.json());


MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  db = client.db(dbName);
});


// Just to test the routes
app.get('/api/v1/users', (req,res) => {
    db.collection('User').find({}).toArray(function(err, docs) {
        if (err) {
            console.log(err)
            throw err
        }
        res.status(200).json(docs)
      }) 
})


// Login routes
app.post('/api/v1/login', async function (req, res){
    console.log(req.body)
	username = req.body.username
	password  = req.body.password
	isvalid = await login({ username, password })
	res.status(200).json(isvalid)
})



async function login({ username, password }) {
    const user = await db.collection('User').findOne({ username });
    if (user && password == user.mdp) {
        return true
    } 
    return false
}

app.listen(3001, () => {});
   
