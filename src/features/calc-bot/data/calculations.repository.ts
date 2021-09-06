import { inject, injectable } from "inversify";
import Failure from "../../../core/failure";
import Result from "../../../core/result";
import Calculation from "../domain/entities/calculation.entity";
import MongoDataSource from "./data-sources/mongo.data-source";

@injectable()
export default class CalculationsRepository {
    public static Token: string = 'CALCULATIONS_REPOSITORY';

    private mongoDatasource: MongoDataSource;

    constructor(
        @inject(MongoDataSource.Token) mongoDataSource: MongoDataSource,
    ) {
        this.mongoDatasource = mongoDataSource;
    }

    public async add(calculation: Calculation): Promise<Result<number | Failure>> {
        try {
            const operations = this.mongoDatasource.getDatabase()?.collection('operations');
            await operations?.insertOne(Calculation.toDocument(calculation));
            return Result.withContent(calculation.result);
        } catch (error) {
            // TODO: better error mapping/ custom errors
            return Result.withFailure(Failure.fromError(<Error>error));
        }
    }

    public async list(max: number): Promise<Result<number[] | Failure>> {
        try {
            const operations = this.mongoDatasource.getDatabase()?.collection('operations');
            const result = await operations?.find({})
                .sort({ '_id': -1 })
                .limit(max)
                .map(document => document.result)
                .toArray();
            return Result.withContent(<number[]>result);
        } catch (error) {
            // TODO: better error mapping/ custom errors
            return Result.withFailure(Failure.fromError(<Error>error));
        }
    }
}