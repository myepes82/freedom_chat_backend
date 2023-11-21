import { logDebug } from "./common/utils/logger.util"
import { Database } from "./core/datasource/database"
import DataSourceFactory from "./core/factory/datasource.factory"
import app from "./server"

function main(): void {
    const { PORT } = process.env

    const port: string | number = PORT ?? 8081

    const database: Database = DataSourceFactory.getMongoDatabaseInstance()
    app.listen(port, async () => {
        logDebug('⚡ Server running at port: {}', port)
        await database.connect()
    })
}


main()