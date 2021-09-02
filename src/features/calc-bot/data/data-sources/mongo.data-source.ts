import { injectable } from "inversify";
import * as mongoDB from "mongodb";

@injectable()
export default class MongoDataSource {
    public static Token: string = 'MONGO_CLIENT';

    private client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_URL);
    private db: mongoDB.Db;

    public async connect() {
        await this.client.connect();
        this.db = this.client.db(process.env.DB_NAME);
    }

    get database() {
        return this.db;
    }
}