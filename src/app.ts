process.env.NODE_CONFIG_DIR = require('path').resolve(__dirname, 'config');

import "reflect-metadata";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import http from 'http';
import { ioc } from "./ioc.config";
import MongoDataSource from "./features/calc-bot/data/data-sources/mongo.data-source";
import { calcBotRoutes } from "./features/calc-bot/calc-bot.routes";
import ExpressRoute from "./core/express-route";
import config from "config";

dotenv.config();

export class App {
  public async init(): Promise<void> {
    const app = express();
    const server = http.createServer(app);

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors());

    const routes = calcBotRoutes.map(route => new ExpressRoute(app, route));
    const mongoClient = ioc.get<MongoDataSource>(MongoDataSource.Token);
    await mongoClient.connect();

    server.listen(Number(config.get('port')), () => {
      console.log(`listening on *:${config.get('port')}`);
    });
  }
}

if (require.main === module) {
  new App().init();
}