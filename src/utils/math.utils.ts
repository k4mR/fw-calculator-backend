export default class MathUtils {
    //TODO: convert to map
    private static operations = new Map<string, Function>([
        ['*', (a: string, b: string) => parseFloat(a) * parseFloat(b)],
        ['/', (a: string, b: string) => parseFloat(a) / parseFloat(b)],
        ['+', (a: string, b: string) => parseFloat(a) + parseFloat(b)],
        ['-', (a: string, b: string) => parseFloat(a) - parseFloat(b)],
        ['%', (a: string, b: string) => parseFloat(a) % parseFloat(b)],
        ['^', (a: string, b: string) => parseFloat(a) ^ parseFloat(b)],
    ]);

    private static applyOperations(parts: string[], operators: string[]) {
        for (let i = 0; i < parts.length; i++) {
            const a = parts[i - 1];
            const b = parts[i + 1];
            const part = parts[i];
            const operator = operators.find((currentOperator) => currentOperator === part);

            if (operator) {
                const operation = this.operations.get(operator);
                if (operation) {
                    parts.splice(i - 1, 3, operation(a, b).toString());
                }
            }
        }
    }

    private static splitByMathOperator(input: string): string[] {
        return input
            .replace(/\s/g, '')
            .split('')
            .reduce((result: string[], char: string, i: number, parts: string[]) => {
                const prevChar = i > 0 ? parts[i - 1] : '';
                // TODO:
                // * check if first element is one of the math operators
                // * check if last element is one of the math operators
                // * look for other operators placed next to each other WRONG input

                if (
                    char === '-' && prevChar === '+' ||
                    char === '+' && prevChar === '-'
                ) {
                    result.splice(-1, 1, '-');
                } else if (char === '-' && prevChar === '-') {
                    result.splice(-1, 1, '+');
                } else if (
                    (/[\+\-\*\/\^\%]/.test(char) &&
                        /[^\+\-\*\/\^\%]/.test(prevChar)) ||
                    (
                        /[^\+\-\*\/\^\%]/.test(char) &&
                        /[\+\-\*\/\^\%]/.test(prevChar)
                    ) || prevChar === ''
                ) {
                    result.push(char);
                } else if (
                    /[^\+\-\*\/\^\%]/.test(char) &&
                    /[^\+\-\*\/\^\%]/.test(prevChar)
                ) {
                    const val = result.pop();
                    result.push(`${val}${char}`);
                }
                return result;
            }, []);
    }

    public static eval(input: string): number {
        const parts = this.splitByMathOperator(input);
        // keep the order and calc from left to right
        while (parts.length > 1) {
            this.applyOperations(parts, ['*', '/', '%', '^']);
            this.applyOperations(parts, ['+', '-']);
        }
        return parseFloat(parts[0]);
    }
}