import "reflect-metadata";

import express from 'express';
import http from 'http';
import { ioc } from "./ioc.config";
import MongoDataSource from "./features/calc-bot/data/data-sources/mongo.data-source";
import { calcBotRoutes } from "./features/calc-bot/calc-bot.routes";
import ExpressRoute from "./core/express-route";

export class App {
  public async init(): Promise<void> {
    const app = express();
    const server = http.createServer(app);
    const mongoClient = ioc.get<MongoDataSource>(MongoDataSource.Token);
    const routes = calcBotRoutes.map(route => new ExpressRoute(app, route));

    await mongoClient.connect();

    server.listen(3000, () => {
      console.log('listening on *:3000');
    });
  }
}

if (require.main === module) {
  new App().init();
}