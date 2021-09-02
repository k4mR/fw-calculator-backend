import { Container } from "inversify";
import { CalcBotController } from "./features/calc-bot/domain/calc-bot.controller";


const ioc = new Container();
ioc.bind<CalcBotController>(CalcBotController.Token).to(CalcBotController);

export { ioc };