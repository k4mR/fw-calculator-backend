import { Route } from "../../core/route";
import { ioc } from "../../ioc.config";
import { CalcBotController } from "./domain/calc-bot.controller";

const controller: CalcBotController = ioc.get<CalcBotController>(CalcBotController.Token);

export const calcBotRoutes = [
    new Route('POST', '/api/v1/calc-bot/calculate', controller.calculate.bind(controller), {
        hooks: {
            pre: (request: Request) => {
                return 1;
                // return request.body.payload.operation;
            }
        },
    }),
    new Route('GET', '/api/v1/calc-bot/list/{max}', controller.getCalculationsHistory.bind(controller), {
        hooks: {
            pre: (request: Request) => {
                return 1;
                // return request.body.payload;
            }
        },
    })
];
