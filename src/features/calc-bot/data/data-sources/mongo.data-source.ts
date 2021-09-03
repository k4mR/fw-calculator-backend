import config from "config";
import { injectable } from "inversify";
import * as mongoDB from "mongodb";

@injectable()
export default class MongoDataSource {
    public static Token: string = 'MONGO_CLIENT';

    private client: mongoDB.MongoClient | undefined;
    private db: mongoDB.Db | undefined;

    public async connect() {
        const connectionUrl = new URL(config.get('dbName'), config.get('dbUrl'));
        this.client = new mongoDB.MongoClient(connectionUrl.toString(), {
            ssl: false,
            sslValidate: false,
        });
        await this.client.connect();
        this.db = this.client.db(config.get('dbName'));
    }

    public getDatabase(): mongoDB.Db | undefined {
        return this.db;
    }
}