import Failure from './failure';

export default class Result<T> {
    public readonly content: T | undefined;
    public readonly failure: Failure | undefined;

    private constructor(data: { content?: T, failure?: Failure }) {
        const { content, failure } = data;
        if (content) {
            this.content = content;
        }
        if (failure) {
            this.failure = failure;
        }
    }

    static withContent<T>(content: T): Result<T> {
        return new Result<T>({ content });
    }

    static withFailure<T>(failure: Failure): Result<T> {
        return new Result<T>({ failure });
    }
}
