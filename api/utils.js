const mail = require('./mailer').mail

async function send_mail({ dest_mail, subject, body }){
	let mailOptions = {
      	from: process.env.EMAIL,
 		    to: dest_mail,
      	subject: subject,
      	text: body
    };

    await mail.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });	
}

module.exports = { send_mail }