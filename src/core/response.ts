import { Socket } from "net";

export interface Response<T = any> {
    body: T;
    status: number;
    type: string;
    headers: object;
    socket: Socket
}
