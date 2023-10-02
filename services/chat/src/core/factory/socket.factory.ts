import ISocketRepository from "../repository/socket.repository";
import { Server } from "http";
import { SocketIoService } from "../services/ socket-io.service";

export default abstract class SocketFactory{
    public static getSocketInstance(server: Server): ISocketRepository {
        return new SocketIoService(server)
    };
}