import { injectable } from "inversify";
import Failure from "../../../core/failure";
import Result from "../../../core/result";
import Calculation from "../domain/entities/calculation.entity";

@injectable()
export default class CalculationsRepository {
    public static Token: string = 'CALCULATIONS_REPOSITORY';

    public async add(calculation: Calculation): Promise<Result<number | Failure>> {
        return Result.withContent(0);
    }

    public async list(max: number): Promise<Result<number[] | Failure>> {
        return Result.withContent([0]);
    }
}