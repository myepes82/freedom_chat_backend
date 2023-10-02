"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInfo = exports.LogError = exports.LogDebug = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel["ERROR"] = "ERROR";
    LogLevel["INFO"] = "INFO";
    LogLevel["DEBUG"] = "DEBUG";
})(LogLevel || (LogLevel = {}));
function extractLogDate() {
    const dt = new Date();
    return `${dt.getFullYear()}/${dt.getMonth()}/${dt.getDay()} - ${dt.getHours()}:${dt.getUTCMinutes()}`;
}
function parseLog(message, level, at) {
    return `[${level}]-[${at}]: (${extractLogDate()}) -> ${message}`;
}
function LogDebug(message, at) {
    console.debug(parseLog(message, LogLevel.INFO, at));
}
exports.LogDebug = LogDebug;
function LogError(message, error, at) {
    console.error(parseLog(message, LogLevel.INFO, at));
}
exports.LogError = LogError;
function LogInfo(message, at) {
    console.info(parseLog(message, LogLevel.INFO, at));
}
exports.LogInfo = LogInfo;
