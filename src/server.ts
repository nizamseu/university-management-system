import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function main() {
  try {
    await mongoose.connect(config.database_URL as string)

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
    console.log('connected To Db')
  } catch (error) {
    console.log('fail to connect DB')
  }
}

main()
