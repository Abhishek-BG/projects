const fs = require('fs');
const path = require('path');

// Log file path
const logFilePath = path.join(__dirname, '../logs/error.log');

// Logger function
const logger = {
  error: (message) => {
    const logMessage = `[${new Date().toISOString()}] ERROR: ${message}\n`;
    console.error(logMessage);
    fs.appendFileSync(logFilePath, logMessage); // Write to log file
  },
};

module.exports = { logger };
