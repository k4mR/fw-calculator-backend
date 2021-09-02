import express from 'express';
import { Route } from './route';

export default class ExpressRoute {
    private app: express.Application;

    constructor(app: express.Application, route: Route) {
        this.app = app;
        this.mount(route);
    }

    public mount(route: Route): express.Application {

        switch (route.method) {
            case 'POST': {
                this.app.route(route.path).post(
                    (req: express.Request, res: express.Response) => {
                        route.handler()
                        res.status(200).send(`List of users`);
                    });
                break;
            }
            case 'GET': {
                break;
            }
            case 'PUT': {
                break;
            }
            case 'DELETE': {
                break;
            }
            default: {
                // TODO: fix it
                throw new Error('Method not defined');
            }

        }



        return this.app;
    }
}