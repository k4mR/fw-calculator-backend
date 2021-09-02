import { inject, injectable } from "inversify";
import Result from "../../../../core/result";
import UseCase from "../../../../core/use-case";
import CalculationsRepository from "../../data/calculations.repository";

@injectable()
export class GetCalculationsHistoryUseCase extends UseCase<number[]> {
    public static Token: string = 'GET_CALCULATIONS_HISTORY_USE_CASE';

    private calculationsRepository: CalculationsRepository;

    constructor(
        @inject(CalculationsRepository.Token) calculationsRepository: CalculationsRepository
    ) {
        super();
        this.calculationsRepository = calculationsRepository;
    }

    public execute(max: number): Result<number[]> | Promise<Result<number[]>> {
        return this.calculationsRepository.list(max);
    }
}