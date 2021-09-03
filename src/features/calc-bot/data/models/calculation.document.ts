import { ObjectId, Document } from "mongodb";

export default class CalculationDocument implements Document {
    constructor(
        public readonly timestamp: number,
        public readonly operation: string,
        public readonly result: number,
        public readonly _id?: ObjectId,
    ) { }
}