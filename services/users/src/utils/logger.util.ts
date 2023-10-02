enum LogLevel{
    ERROR = "ERROR",
    INFO = "INFO",
    DEBUG = "DEBUG"
}

function extractLogDate(): String {
    const dt = new Date()
    return `${dt.getFullYear()}/${dt.getMonth()}/${dt.getDay()} - ${dt.getHours()}:${dt.getUTCMinutes()}`
}

function parseLog(message: string, level: LogLevel, at?: string): string {
    return `[${level}]-[${at}]: (${extractLogDate()}) -> ${message}`
}

export function LogDebug(message: string, at?: string): void{
    console.debug(parseLog(message, LogLevel.INFO, at))
}
export function LogError(message: string, error: any, at?: string): void{
    console.error(parseLog(message, LogLevel.INFO, at))
}
export function LogInfo(message: string, at?: string): void{
    console.info(parseLog(message, LogLevel.INFO, at))
}