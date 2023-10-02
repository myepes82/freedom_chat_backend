import ISocketRepository from "../repository/socket.repository";
import { Server } from "http";
import { Server as SocketIoServer, Socket} from "socket.io";
import { LogDebug, LogInfo } from "../../utils/logger.util";

export class SocketIoService implements ISocketRepository{

    private connectionEvent: string = "connection";
    private io: SocketIoServer;

    constructor(server: Server){
        this.io = new SocketIoServer(server);
        this.io.on(this.connectionEvent, (socket: Socket) => {
            LogDebug(`New client connected: ${socket.id}`)
            socket.on("disconnect", () => this.disconnectionHandler(socket))
        })
        LogInfo("Web socket server initializated", "SocketIoService.ts")
    }

    public connect(): void {
        this.io.on(this.connectionEvent, (socket: Socket) => {
            LogDebug(`New client connected: ${socket.id}`)
            socket.on("disconnect", () => this.disconnectionHandler(socket))
        })
    }

    public addEvent(eventName: string, supplier: Function): void {
        this.io.on(eventName, (data: Socket) => supplier(data))
    }

    private disconnectionHandler(socket: Socket): void{
        LogInfo(`Disconnected client: ${socket.id}`, "SocketIoService.ts")
    }
    
}