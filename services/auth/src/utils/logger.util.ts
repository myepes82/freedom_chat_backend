import { CommonErrorInstance } from "../shared/errors/common.error"

enum LogLevel {
    ERROR = "ERROR",
    INFO = "INFO",
    DEBUG = "DEBUG"
}

function extractErrorParams(error: Error | CommonErrorInstance) {
    if (error instanceof CommonErrorInstance) {
        return {
            name: error.name,
            description: error.description
        }
    }
    return {
        name: error.name,
        description: error.message
    }
}

function extractLogDate(): String {
    const dt = new Date()
    return `${dt.getFullYear()}/${dt.getMonth()}/${dt.getDay()} - ${dt.getHours()}:${dt.getUTCMinutes()}`
}

function parseLog(message: string, level: LogLevel, at?: string): string {
    return `[${level}]-[${at}]: (${extractLogDate()}) -> ${message}`
}

export function LogDebug(message: string, at?: string): void {
    console.debug(parseLog(message, LogLevel.DEBUG, at))
}
export function LogError(error: Error | CommonErrorInstance, at?: string): void {
    const { name, description } = extractErrorParams(error);
    console.error(parseLog(`[${name}]: ${description}`, LogLevel.INFO, at))
}
export function LogInfo(message: string, at?: string): void {
    console.info(parseLog(message, LogLevel.INFO, at))
}