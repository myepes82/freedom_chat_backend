import { Database } from "../datasource/database";
import MongoDataSource from "../datasource/mongo/mongo.datasource";

export default class DataSourceFactory {
    public static getMongoDatabaseInstance () : Database {
        return new MongoDataSource()
    }
}