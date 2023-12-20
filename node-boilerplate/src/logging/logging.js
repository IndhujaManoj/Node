const { createLogger, transports, format } = require('winston');
const { combine, timestamp, printf } = format;
const fs = require('fs');

// Create the log directory if it doesn't exist
const logDir = 'src/logging/logs';
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

// Create a custom log format
const logFormat = printf(({ timestamp, level, message }) => {
  return `${timestamp} - ${level}: ${message}`;
});

// Generate the log file name with the current date
const getCurrentDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${day}-${month}-${year}`;
};

const logFileName = `${logDir}/log-${getCurrentDate()}.log`;

// Create a logger
const logger = createLogger({
  level: 'info', // Set the desired log level
  format: combine(timestamp(), logFormat),
  transports: [
    new transports.File({
      filename: logFileName, // Use the dynamically generated file name
      zippedArchive: true,
      maxSize: '20m', // Maximum log file size
      maxFiles: '10', // Keep logs for up to 10 days
    }),
  ],
});

// Add a console transport for logging to the console
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({ format: format.simple() }));
}

module.exports = logger;
