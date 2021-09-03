export interface Request<T = any> {
    body: T;
    params: object;
    query: object;
    header: object;
}

