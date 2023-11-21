import express, { Express, json, urlencoded } from "express";
import cors from "cors";
import { parseSuccessResponse } from "./utils/responseParser.utils";
import requestLogger from "./utils/middlewares/requestLogger.middleware";
import authRestAdapter from "./adapters/in/authRestAdapter";

const app = express();

app.use(json({limit: "10mb"}));
app.use(urlencoded({extended: true}));
app.use(cors({
    methods:"*", 
    origin: ["*"]}))
app.use(requestLogger)

app.get("/", (_, res) => parseSuccessResponse<any>(res, {status: "ok"}, 200))
app.use("/api/auth", authRestAdapter)

export default app as Express;