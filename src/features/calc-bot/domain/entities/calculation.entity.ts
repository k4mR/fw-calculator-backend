import MathUtils from "../../../../utils/math.utils";

export default class Calculation {
    private constructor(
        public readonly operation: string,
        public readonly result: number
    ) {};

    public static fromOperationString(operation: string) {
        const result = MathUtils.eval(operation);
        return new Calculation(operation, result);
    }
}