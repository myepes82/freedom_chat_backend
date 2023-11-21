import express, { Application, json, urlencoded } from "express"
import helmet from "helmet"
import httpRequestLoggerMiddleware from "./core/middlewares/httpRequestLogger.middleware"
import httpErrorHandlerMiddleware from "./core/middlewares/httpErrorHandler.middleware"

const app: Application = express()

app.use(json({ limit: '10mb'}))
app.use(urlencoded({ extended: true }))
app.use(helmet())

// Custom middlewares and routes adding
app.use(httpRequestLoggerMiddleware)



app.use(httpErrorHandlerMiddleware)


export default app