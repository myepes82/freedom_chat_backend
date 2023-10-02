"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseErrorResponse = exports.parseSuccessResponse = void 0;
const common_error_1 = require("../shared/errors/common.error");
function extractError(error) {
    if (error instanceof common_error_1.CommonErrorInstance) {
        return {
            name: error.name,
            description: error.description,
            status: error.status
        };
    }
    return {
        name: error.message,
        description: error.message,
        status: 500
    };
}
function error(error) {
    const { name, status, description } = extractError(error);
    return {
        status,
        content: {},
        error: name,
        description: description
    };
}
function success(content, status) {
    return {
        status,
        content,
    };
}
function parseSuccessResponse(res, content, status) {
    res.send(success(content, status)).status(status);
}
exports.parseSuccessResponse = parseSuccessResponse;
function parseErrorResponse(res, er) {
    const err = error(er);
    res.send(err).status(err.status);
}
exports.parseErrorResponse = parseErrorResponse;
