import { inject, injectable } from "inversify";

@injectable()
export class CalcBotController {

    public static Token: string = 'CALC_BOT_CONTROLLER';

    public calculate(operation: string) {
       
    }

    public getCalculationsHistory(max: number) {
       
    }
}