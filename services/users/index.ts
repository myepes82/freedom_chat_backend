import dotenv from "dotenv";
import app from "./src/server";
import { LogInfo } from "./src/utils/logger.util";

const { NODE_ENV, PORT } = process.env;

if(NODE_ENV === "dev") dotenv.config();

const port = PORT || 4001

app.listen(port, () => {
    LogInfo(`Server running at port: ${port}`, "Index.ts")
});