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

app.get('/api/users', (req,res) => {
    db.collection('User').find({}).toArray(function(err, docs) {
        if (err) {
            console.log(err)
            throw err
        }
        res.status(200).json(docs)
      }) 
})

app.post('/api/login', urlencodedParser, async function (req, res){
	response = {
		username : req.body.username,
		password : req.body.password,
	}
	username = response.username
	password  = response.password

	isvalid = await login({ username, password })
	console.log(isvalid)
	res.status(200).json(isvalid)
})


app.listen(3000, () => {
 console.log('Go to http://localhost:3000/users');
});


async function login({ username, password }) {
    const user = await db.collection('User').findOne({ username });
    if (user && password == user.mdp) {
        return true
    } 
   	return false
}
