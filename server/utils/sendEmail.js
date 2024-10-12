const nodemailer = require('nodemailer');
const config = require('../configs/config');


const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.emailUsername,
      pass: config.emailPassword,
    },
  });

  const message = {
    from: `${config.fromName} <${config.fromEmail}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(message);
};

module.exports = sendEmail;