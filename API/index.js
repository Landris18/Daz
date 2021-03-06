// ****************************
const mail = require('./conf').mail
const url = require('./conf').url
const dbName = require('./conf').dbName
const verifid = require('./middleware/verifid');
// ****************************
const bcrypt = require('bcrypt')
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
// ****************************
const app = express()
let db



MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  db = client.db(dbName);
});


// Init parser for post request
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));


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


// Register route {email, username, password} => 
app.post('/api/v1/register', async function(req, res){
    console.log(req.body)

    username = req.body.username.toLowerCase(),
    email  = req.body.email.toLowerCase(),
    password  = await bcrypt.hash(req.body.password, 5)

    await register({ username, email, password ,res })
})

async function register({ username, email, password ,res}){
	const username_exist = await db.collection('User').findOne({ username });
	const email_exist = await db.collection('User').findOne({ email })
	if(username_exist){
		return res.status(401).json({ error :'Username "'+username+'" already taken'})
	}
	else if(email_exist){
		return res.status(401).json({ error :'Email "'+email+'" already associate to an account'})
	}
	else{
		const code = ('0000'+(Math.floor(Math.random()*99999)).toString()).substr(-5)
		await db.collection('User').insertOne({
				username: username,
				email: email,
				password: password,
				code: code
			})
		console.log('user inserted')
		let mailOptions = {
      from: 'arleme.dev7@gmail.com',
 		  to: email,
      subject: 'Code de Confirmation',
      text: "Votre code de confirmation est: " + code
    };

    mail.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    return res.status(200).json({
      username: username,
      code: code
    })
	}
}

async function send_code({email, reason}){
	const
}


// Login with {username, password} and return {userID&Token or Error}
app.post('/api/v1/login', async function (req, res){
    console.log(req.body)
	username = req.body.username
	password  = req.body.password

    await login({ username, password, res })
})

async function login({ username, password, res }) {
    const user = await db.collection('User').findOne({ username });
    if(!user){
        return res.status(401).json({ error :'Username doesn\'t exist, try another or sign up !'})
    } 
    //else if(bcrypt.compare(req.body.password, user.password)) {
    else if(password == user.password) {
        return res.status(200).json({
            userID : user._id,
            token : jwt.sign(
              { userID: user._id },
              'BLACK_MAVERICK_TOKEN',
              { expiresIn: '7 days' }
            )
        })
    }
    else{
        return res.status(401).json({ error :'You inserted an incorrect password !'})
    }
}



// Verify if the {userID, token} match and return True or false
/*app.get('/api/v1/verify_token', (req,res) => {
	console.log(req.body)
	try {
		const token = req.headers.authorization.token;
		const decodedToken = jwt.verify(token, 'BLACK_MAVERICK_TOKEN');
		console.log(decodedToken)
		const userId = decodedToken.userID;
		if (req.body.userId && req.body.user_id !== userID) {
			res.status(401).json({
				error : new Error('Invalid user ID')
			})
		} else {
			res.status(200).json(true)
		}
	} catch {
		res.status(401).json({
			error: new Error('Invalid request!')
		});
	}
})
*/

// Listen on port 3001
app.listen(3001, () => {});
