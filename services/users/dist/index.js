"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./src/server"));
const logger_util_1 = require("./src/utils/logger.util");
const { NODE_ENV, PORT } = process.env;
if (NODE_ENV === "dev")
    dotenv_1.default.config();
const port = PORT || 4001;
server_1.default.listen(port, () => {
    (0, logger_util_1.LogInfo)(`Server running at port: ${port}`, "Index.ts");
});
