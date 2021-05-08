const url = require('./conf').url
const dbName = require('./conf').dbName

const express = require('express');
const bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({ extended: false })  
const app = express()
const MongoClient = require('mongodb').MongoClient;
let db
 
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  db = client.db(dbName);
});

app.get('/api/v1/users', (req,res) => {
    db.collection('User').find({}).toArray(function(err, docs) {
        if (err) {
            console.log(err)
            throw err
        }
        res.status(200).json(docs)
      }) 
})

app.post('/api/v1/login', urlencodedParser, async function (req, res){
    console.log(req.body)
	response = {
		username : req.body.username,
		password : req.body.password,
    }
	username = response.username
	password  = response.password

	isvalid = await login({ username, password })
	console.log(isvalid)
})



async function login({ username, password }) {
    const user = await db.collection('User').findOne({ username });
    message = ""
    if (user && password == user.mdp) {
        message = "Success";
        console.log(message)
    } 
    message = "Failed"

}

app.listen(3001, () => {});
   
