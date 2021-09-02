export type RouteOptions = {
    hooks?: {
        pre?: Function,
        post?: Function,
    },
    validators?: {
        request?: Function,
        response?: {
            [status: number]: Function
        }
    }
}

export type RequestMethod = 'POST' | 'PUT' | 'DELETE' | 'GET';

export class Route {
    constructor(
        public readonly method: RequestMethod,
        public readonly path: string | string[],
        public readonly handler: Function,
        public readonly options?: RouteOptions
    ) {}
}
