import express from 'express';
import { Route } from './route';

export default class ExpressRoute {
    private app: express.Application;

    constructor(app: express.Application, route: Route) {
        this.app = app;
        this.mount(route);
    }

    public mount(route: Route): express.Application {

        const routeHandler = async (req: express.Request, res: express.Response) => {
            let args: unknown;
            if (route.options?.hooks?.pre) {
                args = route.options?.hooks?.pre(req);
            }
            try {
                const result = await route.handler(args);
                if (route.options?.hooks?.post) {
                    const parsedResult = route.options?.hooks?.post(result);
                    res.status(200).send(parsedResult);
                } else {
                    res.status(200).send(result);
                }
            } catch (error) {
                // TODO: map errors to codes etc.
                // create appropriate message
                res.status(500).send(error);
            }

        };

        switch (route.method) {
            case 'POST': {
                this.app.route(route.path).post(routeHandler);
                break;
            }
            case 'GET': {
                this.app.route(route.path).get(routeHandler);
                break;
            }
            case 'PUT': {
                this.app.route(route.path).put(routeHandler);
                break;
            }
            case 'DELETE': {
                this.app.route(route.path).delete(routeHandler);
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