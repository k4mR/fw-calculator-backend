
export default class Calculation {
    private constructor(
        public readonly operation: string,
        public readonly result: number
    ) {};

    private static calculate(operation: string) {
        return new Function('return ' + operation)();
    }

    public static fromOperationString(operation: string) {
        const result = this.calculate(operation);
        return new Calculation(operation, result);
    }
}