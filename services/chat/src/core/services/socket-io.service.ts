import ISocketRepository from "../repository/socket.repository";
import { Server } from "http";
import { Server as SocketIoServer, Socket } from "socket.io";
import { LogDebug, LogInfo } from "../../utils/logger.util";
import { handleMessage } from "../websocket/supplierFunctions.ws";

export class SocketIoService implements ISocketRepository {
    private connectionEvent: string = "connection";
    private io: SocketIoServer;

    constructor(server: Server) {
        this.io = new SocketIoServer(server)
        LogInfo("Web socket server initializated", `${this.constructor.name}.ts`);
    }

    public connection(): void {
        this.io.on(this.connectionEvent, (socket: Socket) => {
            LogDebug(`New client connected: ${socket.id}`, `${this.constructor.name}.ts`)
            socket.on("message", handleMessage);
            socket.on("disconnect", () => this.disconnectionHandler(socket))
        })
    }

    private disconnectionHandler(socket: Socket): void {
        LogInfo(`Disconnected client: ${socket.id}`, `${this.constructor.name}.ts`)
    }

}