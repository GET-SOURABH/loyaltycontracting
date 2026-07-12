const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const apiRoutes = require('./routes/api.routes');
const config = require('./config/config');

const app = express();

// Security Middleware
app.use(helmet());

// CORS configuration - restrict to frontend domain
const corsOptions = {
  origin: config.frontendUrl,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Parse JSON and URL-encoded bodies (Note: Multer handles multipart/form-data in the routes)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate Limiting to prevent spam
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // limit each IP to 20 requests per windowMs
  message: { success: false, message: 'Too many requests, please try again later.' }
});

// Apply rate limiting to all API routes
app.use('/api', apiLimiter);

// Mount API routes
app.use('/api', apiRoutes);

// Simple health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend is running' });
});

// Error handling middleware (catch-all)
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  if (err.message && err.message.includes('file type')) {
    return res.status(400).json({ success: false, message: err.message });
  }
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ success: false, message: 'File is too large. Max 10MB per file.' });
  }
  if (err.code === 'LIMIT_UNEXPECTED_FILE') {
    return res.status(400).json({ success: false, message: 'Too many files uploaded.' });
  }
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

// Start Server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Loyalty Backend server running on port ${PORT}`);
});
