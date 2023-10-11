/* eslint-disable no-undef */
import path from 'path'
import { createLogger, format, transports } from 'winston'
const { combine, timestamp, label, prettyPrint } = format
import 'winston-daily-rotate-file'
// Custom Log Format

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'UMS-info-Success' }),
    timestamp(),
    prettyPrint(),
  ),
  transports: [
    new transports.Console(),
    new transports.DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'success',
        'ums-success-%DATE%.log',
      ),
      datePattern: 'DD-MM-YYYY-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'UMS-Error' }), timestamp(), prettyPrint()),
  transports: [
    new transports.Console(),
    new transports.DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'error',
        'ums-error-%DATE%.log',
      ),
      datePattern: 'DD-MM-YYYY-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})
export { logger, errorLogger }
