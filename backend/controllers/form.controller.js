const fs = require('fs');
const emailService = require('../services/email.service');

const handleQuoteRequest = async (req, res) => {
  try {
    const { name, phone, email, service, project_details } = req.body;
    
    // Prepare attachments
    const attachments = [];
    if (req.files && req.files.length > 0) {
      req.files.forEach(file => {
        attachments.push({
          filename: file.originalname,
          path: file.path
        });
      });
    }

    const htmlBody = `
      <h2>New Renovation Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service Needed:</strong> ${service}</p>
      <p><strong>Project Details:</strong></p>
      <p>${project_details.replace(/\n/g, '<br>')}</p>
    `;

    // Send email
    await emailService.sendEmail('New Renovation Quote Request', htmlBody, attachments);

    // Clean up uploaded files
    if (req.files && req.files.length > 0) {
      req.files.forEach(file => {
        fs.unlink(file.path, (err) => {
          if (err) console.error(`Failed to delete file: ${file.path}`, err);
        });
      });
    }

    res.status(200).json({ success: true, message: 'Quote request submitted successfully.' });

  } catch (error) {
    console.error('Error handling quote request:', error);
    // Cleanup files on error
    if (req.files && req.files.length > 0) {
      req.files.forEach(file => {
        fs.unlink(file.path, () => {});
      });
    }
    res.status(500).json({ success: false, message: 'Internal server error while processing quote request.' });
  }
};

const handleQuickConsultation = async (req, res) => {
  try {
    const { first_name, email, phone } = req.body;

    const htmlBody = `
      <h2>New Quick Consultation Request</h2>
      <p><strong>First Name:</strong> ${first_name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    `;

    // Send email
    await emailService.sendEmail('New Quick Consultation Request', htmlBody);

    res.status(200).json({ success: true, message: 'Consultation request submitted successfully.' });

  } catch (error) {
    console.error('Error handling quick consultation request:', error);
    res.status(500).json({ success: false, message: 'Internal server error while processing consultation request.' });
  }
};

module.exports = {
  handleQuoteRequest,
  handleQuickConsultation
};
