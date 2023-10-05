import ENV from 'dotenv'
import path from 'path'

ENV.config({
  path: path.join(process.cwd(), '.env'),
})

export default {
  port: process.env.PORT,
  database_URL: process.env.DATABASE_URL,
  default_user_password: process.env.DEFAULT_USER_PASSWORD,
}
