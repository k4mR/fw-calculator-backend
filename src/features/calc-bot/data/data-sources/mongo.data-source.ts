import config from "config";
import { injectable } from "inversify";
import * as mongoDB from "mongodb";

@injectable()
export default class MongoDataSource {
    public static Token: string = 'MONGO_CLIENT';

    private client: mongoDB.MongoClient = new mongoDB.MongoClient(config.get('dbUrl'));
    private db: mongoDB.Db | undefined;

    public async connect() {
        await this.client.connect();
        this.db = this.client.db(process.env.DB_NAME);
    }

    get database(): mongoDB.Db | undefined {
        return this.db;
    }
}