const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'arleme.dev7@gmail.com',
    pass: '--Blazer7629-Seven@@',
  },
});
transporter.verify().then(console.log).catch(console.error);

transporter.sendMail({
  from: '"Your Name" <arleme.dev7@gmail.com>',
  to: "arleme.botoravony@esti.mg",
  subject: "Just test",
  text: "There is a new article. It's about sending emails, check it out!",
  html: "<b>There is a new article. It's about sending emails, check it out!</b>",
}).then(info => {
  console.log({info});
}).catch(console.error);
