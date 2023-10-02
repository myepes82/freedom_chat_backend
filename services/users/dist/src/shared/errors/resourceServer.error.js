"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceServerError = void 0;
const common_error_1 = require("./common.error");
class ResourceServerError extends common_error_1.CommonErrorInstance {
    constructor(description) {
        super("ResourceServerError", description, 500);
    }
}
exports.ResourceServerError = ResourceServerError;
