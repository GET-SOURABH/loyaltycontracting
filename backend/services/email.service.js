const nodemailer = require('nodemailer');
const config = require('../config/config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email.smtpEmail,
    pass: config.email.smtpPassword
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
