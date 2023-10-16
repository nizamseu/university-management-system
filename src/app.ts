import express, { Application, Request, Response } from 'express'
import cors from 'cors'

import globalErrorHandler from './app/middleware/globarErrorHandler'
import { UserRoutes } from './app/modules/users/users.route'
import { APIError } from './errors/ApiError'
// import { APIError } from './errors/ApiError'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  }),
)
// Application Route

app.use('/api/v1', UserRoutes.router)

//global error handler
app.use(globalErrorHandler)

// tesing route
// app.get('/', async (req: Request, res: Response) => {
//   throw new APIError(400, 'error nizam')
// })

export default app
