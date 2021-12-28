const mail = require('./conf').mail

async function send_mail({ dest_mail, subject, body }){
	let mailOptions = {
      	from: 'arleme.dev7@gmail.com',
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