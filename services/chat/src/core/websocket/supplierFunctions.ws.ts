import {Socket} from "socket.io"

export function handleMessage(socket: Socket): void {
    console.log(socket.data)
}