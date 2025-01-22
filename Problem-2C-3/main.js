const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const { logger } = require('./utils/logger');

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON payloads
app.use(morgan('dev')); // Logging requests

// Routes
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  logger.error(err.message); // Log the error
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
    },
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
