const mail = require('./conf').mail

let mailOptions = {
  from: 'support@iteam-s.xyz',
  to: 'arleme.botoravony@esti.mg',
  subject: 'Autrement dite',
  text: "c'est facile !!"
};

mail.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});