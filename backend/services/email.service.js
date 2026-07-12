const nodemailer = require('nodemailer');
const config = require('../config/config');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.email.smtpEmail,
    pass: config.email.smtpPassword
  },
  logger: true,
  debug: true
});

transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP VERIFY ERROR:", error);
  } else {
    console.log("SMTP server is ready");
  }
});

/**
 * Sends an email
 * @param {string} subject 
 * @param {string} html 
 * @param {Array} attachments
 */
const sendEmail = async (subject, html, attachments = []) => {
  const mailOptions = {
    from: `"Loyalty Contracting Website" <${config.email.smtpEmail}>`,
    to: config.email.toEmail,
    subject: subject,
    html: html,
    attachments: attachments
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = {
  sendEmail
};
