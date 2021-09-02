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

    public calculate(operation: string) {
        return this.calculateUseCase.execute(operation);
    }

    public getCalculationsHistory(max: number) {
        return this.getCalculationsHistoryUseCase.execute(max);
    }
}