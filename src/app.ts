import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
import globalErrorHandler from './app/middleware/globarErrorHandler'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  }),
)
// Application Route

app.use('/api/v1/users/', usersRouter)

// tesing route
app.get('/', async (req: Request, res: Response) => {
  res.json({ message: 'helllo' })
})

app.use(globalErrorHandler)
export default app
