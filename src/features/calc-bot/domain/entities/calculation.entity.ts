
export default class Calculation {
    private constructor(
        public readonly operation: string,
        public readonly result: number
    ) {};

    public static fromOperationString(operation: string) {
        const result = 0;
        return new Calculation(operation, result);
    }
}