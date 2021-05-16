let nodemailer = require('nodemailer');

let mail = nodemailer.createTransport({
   host: "mail48.lwspanel.com",
   port: 465,
   secure: true,
  auth: {
    user: 'support@iteam-s.xyz',
    pass: 'eH4-xUJU9t@r-b2'
  }
});

let mailOptions = {
  from: 'support@iteam-s.xyz',
  to: 'arleme.botoravony@esti.mg',
  subject: 'Autrement dit',
  text: "c'est facile"
};

mail.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
