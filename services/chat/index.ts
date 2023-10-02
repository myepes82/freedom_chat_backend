import dotenv from "dotenv";
import app from "./src/server";
import { LogInfo } from "./src/utils/logger.util";
import SocketFactory from "./src/core/factory/socket.factory";
import ISocketRepository from "./src/core/repository/socket.repository";

const { NODE_ENV, PORT } = process.env;

if(NODE_ENV === "dev") dotenv.config();

const port = PORT || 4000

const server = app.listen(port, () => {
    LogInfo(`Server running at port: ${port}`, "Index.ts")
});

const socket: ISocketRepository = SocketFactory.getSocketInstance(server);
socket.connection()