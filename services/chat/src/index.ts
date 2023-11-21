import app from "./server";
import { LogInfo } from "./utils/logger.util";
import SocketFactory from "./core/factory/socket.factory";
import ISocketRepository from "./core/repository/socket.repository";

const { PORT } = process.env;

const port = PORT ?? 4000

const server = app.listen(port, () => {
    LogInfo(`Server running at port: ${port}`, "Index.ts")
});

const socket: ISocketRepository = SocketFactory.getSocketInstance(server);
socket.connection()