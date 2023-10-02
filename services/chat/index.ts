import dotenv from "dotenv";
import { Server, createServer } from "http";
import app from "./src/server";
import { LogInfo } from "./src/utils/logger.util";
import SocketFactory from "./src/core/factory/socket.factory";
import ISocketRepository from "./src/core/repository/socket.repository";
import { Server as SocketIoServer } from "socket.io";

const { NODE_ENV, PORT } = process.env;

if(NODE_ENV === "dev") dotenv.config();

const port = PORT || 4000

const server = createServer(app);
const socketServer = new SocketIoServer(server)

server.listen(port, () => {
    LogInfo(`Server running at port: ${port}`, "Index.ts")
});

//const socket: ISocketRepository = SocketFactory.getSocketInstance(server);


socketServer.on("connection", (socket) => {
    console.log("Cliente conectado:", socket.id);

    // Puedes manejar eventos y lógica de Socket.IO aquí
    socket.on("mensaje", (data) => {
        console.log("Mensaje recibido:", data);
        // Realizar acciones en respuesta al mensaje recibido
    });

    socket.on("disconnect", () => {
        console.log("Cliente desconectado:", socket.id);
        // Realizar acciones cuando un cliente se desconecta
    });
})