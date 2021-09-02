import { Container } from "inversify";
import MongoDataSource from "./features/calc-bot/data/data-sources/mongo.data-source";
import { CalcBotController } from "./features/calc-bot/domain/calc-bot.controller";
import { CalculateUseCase } from "./features/calc-bot/domain/use-cases/calculate.use-case";


const ioc = new Container();
ioc.bind<MongoDataSource>(MongoDataSource.Token).to(MongoDataSource);
ioc.bind<CalcBotController>(CalcBotController.Token).to(CalcBotController);
ioc.bind<CalculateUseCase>(CalculateUseCase.Token).to(CalculateUseCase);
ioc.bind<CalculateUseCase>(CalculateUseCase.Token).to(CalculateUseCase);

export { ioc };