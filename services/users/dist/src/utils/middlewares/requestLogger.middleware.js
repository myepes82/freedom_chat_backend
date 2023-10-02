"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_util_1 = require("../logger.util");
function requestLogger(req, _, next) {
    const at = "Servet.ts";
    const { method, body, path } = req;
    if (method.toUpperCase() !== "GET") {
        (0, logger_util_1.LogDebug)(`Receiving ${method.toUpperCase()} to ${path} - with body: \n ${body} `, at);
    }
    else {
        (0, logger_util_1.LogDebug)(`Receiving ${method.toUpperCase()} to ${path}`, at);
    }
    next();
}
exports.default = requestLogger;
