import MathUtils from "../../../../utils/math.utils";
import CalculationDocument from "../../data/models/calculation.document";

export default class Calculation {
    private constructor(
        public readonly operation: string,
        public readonly result: number
    ) { };

    public static fromOperationString(operation: string) {
        const result = MathUtils.eval(operation);
        return new Calculation(operation, result);
    }

    public static toDocument(calculation: Calculation): CalculationDocument {
        const { operation, result } = calculation;
        return new CalculationDocument(
            Date.now(),
            operation,
            result,
        );
    }
}