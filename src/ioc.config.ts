import { Container } from "inversify";
import CalculationsRepository from "./features/calc-bot/data/calculations.repository";
import MongoDataSource from "./features/calc-bot/data/data-sources/mongo.data-source";
import { CalcBotController } from "./features/calc-bot/domain/calc-bot.controller";
import { CalculateUseCase } from "./features/calc-bot/domain/use-cases/calculate.use-case";
import { GetCalculationsHistoryUseCase } from "./features/calc-bot/domain/use-cases/get-calculations-history.use-case";


const ioc = new Container();
ioc.bind<MongoDataSource>(MongoDataSource.Token).to(MongoDataSource);
ioc.bind<CalcBotController>(CalcBotController.Token).to(CalcBotController);
ioc.bind<CalculateUseCase>(CalculateUseCase.Token).to(CalculateUseCase);
ioc.bind<GetCalculationsHistoryUseCase>(GetCalculationsHistoryUseCase.Token)
    .to(GetCalculationsHistoryUseCase);
ioc.bind<CalculationsRepository>(CalculationsRepository.Token)
    .to(CalculationsRepository);

export { ioc };