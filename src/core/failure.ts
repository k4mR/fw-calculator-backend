export default class Failure {

    private constructor(
        public readonly error: Error,
        public readonly throwable: boolean,
        public readonly reportable: boolean,
    ) { }

    static fromError(
        error: Error,
        throwable: boolean = false,
        reportable: boolean = false,
    ): Failure {
        return new Failure(error, throwable, reportable);
    }
}
