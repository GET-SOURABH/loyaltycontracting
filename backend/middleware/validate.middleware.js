const { body, validationResult } = require('express-validator');

const validateQuoteForm = [
  body('name').trim().notEmpty().withMessage('Full Name is required.'),
  body('phone').trim().notEmpty().withMessage('Phone Number is required.'),
  body('email').trim().isEmail().withMessage('Valid Email Address is required.'),
  body('service').trim().notEmpty().withMessage('Service Needed is required.'),
  body('project_details').trim().notEmpty().withMessage('Project Details are required.')
];

const validateConsultationForm = [
  body('first_name').trim().notEmpty().withMessage('First Name is required.'),
  body('email').trim().isEmail().withMessage('Valid Email Address is required.'),
  body('phone').trim().notEmpty().withMessage('Phone Number is required.')
];

const checkValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // If validation fails and there are files uploaded, we should clean them up.
    // Cleanup is handled optionally in the controller, but here we can just return the error.
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

module.exports = {
  validateQuoteForm,
  validateConsultationForm,
  checkValidationResult
};
