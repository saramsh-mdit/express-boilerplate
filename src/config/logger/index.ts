import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf } = format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `[${level}] ${timestamp} ${message}`;
});

const loggerConfig = () => {
  return createLogger({
    level: 'debug',
    format: combine(
      timestamp({ format: 'HH:MM:A - MMM/DD/YYYY' }),
      customFormat
    ),
    transports: [
      new transports.File({ filename: 'error.log', level: 'error' }),
      new transports.File({ filename: 'combined.log' }),
      new transports.Console(),
    ],
  });
};

const logger = loggerConfig();

export default logger;
