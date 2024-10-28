import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'email-smtp.us-east-1.amazonaws.com', // Replace <region> with your AWS SES region (e.g., us-east-1)
  port: 25,
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME, 
    pass: process.env.SMTP_PASSWORD, 
  },
});

const mailOptions = {
  to: 'vperkinv@gmail.com',
  subject: 'GitHub "Pet-projects" test report ',
  text: 'Here you can find actual test report -  https://vadimperkin.github.io/pet-project', 
};

// Send email
transporter.sendMail(mailOptions, (error: Error | null, info: any) => {
  if (error) {
    return console.log('Error occurred: ' + error.message);
  }
  console.log('Email sent: ' + info.response);
});
