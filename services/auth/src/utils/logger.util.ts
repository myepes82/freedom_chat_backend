enum LogLevel{
    ERROR = "ERROR",
    INFO = "INFO",
    DEBUG = "DEBUG"
}


function parseLog(message: string, level: LogLevel, at?: string): string {
    return `${level}`
}

function LogDebug(message: string, at?: string): void{
    console.debug(parseLog(message, LogLevel.INFO, at))
}
function LogError(message: string, error: any, at?: string): void{
    console.error(parseLog(message, LogLevel.INFO, at))
}
function LogInfo(message: string, at?: string): void{
    console.info(parseLog(message, LogLevel.INFO, at))
}

module.exports = {
    LogDebug,
    LogError,
    LogInfo
}