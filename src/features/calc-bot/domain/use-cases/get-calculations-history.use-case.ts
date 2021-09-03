import { inject, injectable } from "inversify";
import Failure from "../../../../core/failure";
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

    public async execute(max: number): Promise<Result<number[] | Failure>> {
        return await this.calculationsRepository.list(max);
    }
}