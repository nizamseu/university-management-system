import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_URL as string)

    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
    logger.info('connected To Db')
  } catch (error) {
    errorLogger.error('fail to connect DB')
  }
}

main()
