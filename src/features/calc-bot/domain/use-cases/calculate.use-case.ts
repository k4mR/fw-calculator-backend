import { inject, injectable } from "inversify";
import Result from "../../../../core/result";
import UseCase from "../../../../core/use-case";
import CalculationsRepository from "../../data/calculations.repository";
import Calculation from "../entities/calculation.entity";

@injectable()
export class CalculateUseCase extends UseCase<number> {
    public static Token: string = 'CALCULATE_USE_CASE';

    private calculationsRepository: CalculationsRepository;

    constructor(
        @inject(CalculationsRepository.Token) calculationsRepository: CalculationsRepository
    ) {
        super();
        this.calculationsRepository = calculationsRepository;
    }

    public execute(operation: string): Result<number> | Promise<Result<number>> {
        const calcualtion: Calculation = Calculation.fromOperationString(operation);

        this.calculationsRepository.add(calcualtion);

        return Result.withContent<number>(calcualtion.result);
    }
}