import { inject, injectable } from "inversify";
import { CalculateUseCase } from "./use-cases/calculate.use-case";
import { GetCalculationsHistoryUseCase } from "./use-cases/get-calculations-history.use-case";

@injectable()
export class CalcBotController {

    public static Token: string = 'CALC_BOT_CONTROLLER';

    private calculateUseCase: CalculateUseCase;
    private getCalculationsHistoryUseCase: GetCalculationsHistoryUseCase;

    public constructor(
        @inject(CalculateUseCase.Token) calculateUseCase: CalculateUseCase,
        @inject(GetCalculationsHistoryUseCase.Token) getCalculationsHistoryUseCase: GetCalculationsHistoryUseCase
    ) {
        this.calculateUseCase = calculateUseCase;
        this.getCalculationsHistoryUseCase = getCalculationsHistoryUseCase;
    }

    public async calculate(operation: string) {
        return await this.calculateUseCase.execute(operation);
    }

    public async getCalculationsHistory(max: number) {
        return await this.getCalculationsHistoryUseCase.execute(max);
    }
}