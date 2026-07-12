const express = require('express');
const router = express.Router();

const upload = require('../middleware/upload.middleware');
const { validateQuoteForm, validateConsultationForm, checkValidationResult } = require('../middleware/validate.middleware');
const formController = require('../controllers/form.controller');

// Main Quote Form Endpoint
// We handle file uploads first, then validate fields.
router.post(
  '/quote',
  upload.array('photos', 5), // 'photos' is the field name, max 5 files
  validateQuoteForm,
  checkValidationResult,
  formController.handleQuoteRequest
);

// Quick Consultation Endpoint (no files)
router.post(
  '/quick-consultation',
  upload.none(), // Important to parse multipart/form-data for text fields even if there are no files
  validateConsultationForm,
  checkValidationResult,
  formController.handleQuickConsultation
);

module.exports = router;
