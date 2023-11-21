import loggingLevelEnum from "../enums/loggingLevel.enum"
import loggingLevelColorEnum from "../enums/loggingLevelColor.enum"

function dateParser (date: Date): string {
    const year = date.getUTCFullYear()
    const day = date.getUTCDay()
    const month = date.getUTCMonth()
    const hours = date.getUTCHours()
    const minutes = date.getUTCMinutes()
    return `${year}/${month}/${day} - ${hours}:${minutes}`
} 
function messageParser(loggingLevel: loggingLevelEnum, message: string, ...args: any[]): string {
    const parsedMessage = args.length != 0  ? args.map(arg => message.replace("{}", arg)) : message
    return `${loggingLevelColorEnum[loggingLevel]}[${loggingLevel}]\x1b[0m: ( ${dateParser(new Date())} ) -> ${parsedMessage}`
}
export function logWarn(message: string, ...args: any): void {
    console.warn(messageParser(loggingLevelEnum.WARN, message, args))
}
export function logError(message: string, ...args: any[]): void {
    console.error(messageParser(loggingLevelEnum.ERROR, message, args))
}
export function logDebug(message: string, ...args: any[]): void {
    console.log(messageParser(loggingLevelEnum.DEBUG, message, args))
}