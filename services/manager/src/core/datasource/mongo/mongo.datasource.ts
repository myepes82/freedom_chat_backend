import mongoose from "mongoose";
import IDatabaseConfig from "../../../common/interfaces/databaseCofig.interface";
import getDbConfig from "../../../common/utils/getDbConfig.util";
import { Database } from "../database";
import { logDebug, logError } from "../../../common/utils/logger.util";

export default class MongoDataSource extends Database {
    private readonly _configuration: IDatabaseConfig
    private connection?: typeof mongoose

    constructor(){
        super()
        this._configuration = getDbConfig()
    }
    public async connect(): Promise<void> {
        const { host, port, user, password, name } = this._configuration
        try {
            logDebug('🕕 Starting db connection')
            this.connection = await mongoose.connect(`${host}:${port}`, { user, pass: password, dbName: name, autoCreate: true})
            logDebug('🧩 Database connected')
        } catch (error) {
            logError(`Error trying to connect to db: {}`, error);
        }
    }
    public async disconnect(): Promise<void> {
        if ( this.connection ) await this.connection.disconnect();
    }
    
}