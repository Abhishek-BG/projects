const express = require('express');
const { validateUserInput } = require('../utils/validation');

const router = express.Router();

// POST /api/users - Accept user input and process
router.post('/', (req, res, next) => {
  try {
    // Validate user input
    const { error, value } = validateUserInput(req.body);
    if (error) throw { status: 400, message: error.details[0].message };

    // Simulate processing (e.g., storing user details)
    const processedData = {
      message: `Hello, ${value.name}! Your email is ${value.email}.`,
      receivedAt: new Date(),
    };

    res.status(200).json(processedData);
  } catch (err) {
    next(err); // Pass error to the error handler
  }
});

module.exports = router;
