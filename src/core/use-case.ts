import Result from './result'

export default abstract class UseCase<T> {
    public abstract execute(...rest: any[]): Promise<Result<T>> | Result<T>;
}
