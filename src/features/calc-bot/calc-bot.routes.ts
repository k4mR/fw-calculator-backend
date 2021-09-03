import { Route } from "../../core/route";
import { Request } from "../../core/request";
import { ioc } from "../../ioc.config";
import { CalcBotController } from "./domain/calc-bot.controller";

const controller: CalcBotController = ioc.get<CalcBotController>(CalcBotController.Token);

interface CalculateRequestBody {
    operation: string;
}

interface GetCalculationsHistoryParams {
    max: string;
}

export const calcBotRoutes = [
    new Route('POST', '/api/v1/calc-bot/calculate', controller.calculate.bind(controller), {
        hooks: {
            pre: (request: Request) => {
                const { operation } = <CalculateRequestBody>request.body;
                return operation;
            }
        },
        // TODO validate request with JEST
        // validators: {
        //     request: 
        // }
    }),
    new Route('GET', '/api/v1/calc-bot/history/:max', controller.getCalculationsHistory.bind(controller), {
        hooks: {
            pre: (request: Request) => {
                const { max } = <GetCalculationsHistoryParams>request.params;
                return Number(max);
            }
        },
    })
];
