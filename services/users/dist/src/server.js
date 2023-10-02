"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const responseParser_utils_1 = require("./utils/responseParser.utils");
const userRest_adapter_1 = __importDefault(require("./adapters/in/userRest.adapter"));
const requestLogger_middleware_1 = __importDefault(require("./utils/middlewares/requestLogger.middleware"));
const app = (0, express_1.default)();
app.use((0, express_1.json)({ limit: "10mb" }));
app.use((0, express_1.urlencoded)({ extended: true }));
app.use((0, cors_1.default)({ methods: "*", origin: "*" }));
app.use(requestLogger_middleware_1.default);
app.use("/api/users", userRest_adapter_1.default);
app.get("/", (_, res) => (0, responseParser_utils_1.parseSuccessResponse)(res, { status: "ok" }, 200));
exports.default = app;
