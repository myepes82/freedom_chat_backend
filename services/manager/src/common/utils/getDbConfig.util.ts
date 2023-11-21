import IDatabaseConfig from "../interfaces/databaseCofig.interface";
import { logError } from "./logger.util";

export default function getDbConfig(): IDatabaseConfig {
    const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env
    if (!DB_HOST || !DB_PORT || !DB_USER || !DB_PASSWORD || !DB_NAME) {
        logError('Please provide all database connection params')
        throw new Error('Please provide all database connection params')
    }
    return {
        port: parseInt(DB_PORT),
        host: DB_HOST,
        name: DB_NAME,
        password: DB_PASSWORD,
        user: DB_USER
    }
}