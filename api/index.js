require('dotenv').config()
// ****************************
const verifid = require('./middleware/verifid');
const mail = require('./mailer').mail
// ****************************
const bcrypt = require('bcrypt')
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const MySql = require('mysql');
// ****************************
const app = express()
// ****************************

// Connection à la base de donnée
const db = MySql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if(err){
    console.log('Impossible de  se connecter à la base de donnée.');
    return;
  }
  console.log('Connexion à la base de donnée reussie.');
});


// Init parser for post request
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));


// Just to test the routes
app.get('/api/v1/users', (req, response) => {
    db.query("SELECT * FROM Utilisateur", function (err, res) {
      if (err) {
        console.log(err)
        response.status(500).json({ error : "Some Error Occured" })
      }
      response.status(200).json(res)
    });
})


// Register route {email, username, password} => 
app.post('/api/v1/register', async function(req, response){
    console.log(req.body)

    username = req.body.username.toLowerCase()
    email  = req.body.email.toLowerCase()
    password  = await bcrypt.hash(req.body.password, 5)

    await register({ username, email, password ,response })
})

async function register({ username, email, password ,response}){
	db.query("SELECT 1 FROM Utilisateur where username = " + MySql.escape(username), function(err, res){
    if (err) {
      console.log(err)
      return response.status(500).json({ error : "Some Error Occured" })
    }
    if(res.length){
		  return response.status(401).json({ error :'Username "'+ username +'" already taken'})
    }
    else{
    	db.query("SELECT 1 FROM Utilisateur where email = " + MySql.escape(email), function(err, res){
        if (err) {
          console.log(err)
          return response.status(500).json({ error : "Some Error Occured" })
        }
        if(res.length){
          return response.status(401).json({ error :'Email "'+email+'" already associate to an account'})
        }
        else{
          const code = ('0000'+(Math.floor(Math.random()*99999)).toString()).substr(-5)
          db.query("INSERT INTO Utilisateur(username, email, password, code) VALUES (" + [MySql.escape(username), MySql.escape(email), MySql.escape(password), MySql.escape(code)].join(",") + ")", function(err, res){
            if (err) {
              console.log(err)
              return response.status(500).json({ error : "Some Error Occured" })
            }
            console.log('user inserted')
            let mailOptions = {
              from: process.env.EMAIL,
              to: email,
              subject: 'Code de Confirmation',
              text: "Votre code de confirmation est: " + code
            };

            mail.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response)
              }
            })

            return response.status(200).json({
              username: username,
              code: code
            })
          })
        }
        }
      )
    }
  })
}


// Login with {username, password} and return {userID&Token or Error}
app.post('/api/v1/login', async function (req, response){
    username = req.body.username
    password  = req.body.password

    await login({ username, password, response })
})

async function login({ username, password, response }) {
    db.query("SELECT * FROM Utilisateur WHERE username = " + MySql.escape(username), function (err, res){
      if (err) {
        console.log(err)
        response.status(500).json({ error : "Some Error Occured" })
      }
      let user = res[0]

      if(!user){
          return response.status(401).json({ error :'Username doesn\'t exist, try another or sign up !'})
      } 
      else if(bcrypt.compare(password, user.password)) {
      //else if(password == user.password) {
          return response.status(200).json({
              userID : user.id,
              token : jwt.sign(
                { userID: user.id },
                'BLACK_MAVERICK_TOKEN',
                { expiresIn: '7 days' }
              )
          })
      }
      else{
          return response.status(401).json({ error :'You inserted an incorrect password !'})
      }
  })
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
app.listen(3001, () => {})