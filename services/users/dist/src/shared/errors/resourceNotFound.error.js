"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceNotFoundError = void 0;
const common_error_1 = require("./common.error");
class ResourceNotFoundError extends common_error_1.CommonErrorInstance {
    constructor(description) {
        super("ResourceNotFoundError ", description, 404);
    }
}
exports.ResourceNotFoundError = ResourceNotFoundError;
