"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonErrorInstance = void 0;
class CommonErrorInstance extends Error {
    constructor(name, description, status) {
        super(name);
        this.description = description;
        this.status = status;
    }
}
exports.CommonErrorInstance = CommonErrorInstance;
