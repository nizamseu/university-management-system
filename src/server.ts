import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'
import { Server } from 'http'

process.on('uncaughtException', err => {
  errorLogger.error(err)
  process.exit(1)
})
let server: Server
async function main() {
  try {
    await mongoose.connect(config.database_URL as string)

    server = app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
    logger.info('connected To Db')
  } catch (error) {
    errorLogger.error('fail to connect DB')
  }

  process.on('uncaughtException', err => {
    if (server) {
      server.close(() => {
        errorLogger.error(err)
      })
    }
    process.exit(1)
  })
}

main()

process.on('SIGTERM', () => {
  errorLogger.error('SIGTERM is received')
  if (server) {
    server.close()
  }
})
