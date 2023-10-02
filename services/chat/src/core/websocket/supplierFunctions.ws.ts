import { LogDebug } from "../../utils/logger.util"

export function handleMessage(data: any): void {
    LogDebug(`${data}`, "SocketIoService.ts")
}