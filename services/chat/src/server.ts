import express, { Express, json, urlencoded } from "express";
import cors from "cors";
import { parseSuccessResponse } from "./utils/responseParser.utils";
import requestLoggerMiddleware from "./utils/middlewares/requestLogger.middleware";
import originAccessHeaderMiddleware from "./utils/middlewares/originAccessHeader.middleware";

const app = express();

app.use(json({limit: "10mb"}));
app.use(urlencoded({extended: true}));
app.use(cors())
app.use(requestLoggerMiddleware)
app.use(originAccessHeaderMiddleware)

app.get("/", (_, res) => parseSuccessResponse<any>(res, {status: "ok"}, 200))

export default app as Express;