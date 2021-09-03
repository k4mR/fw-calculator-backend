import { injectable } from 'inversify';
import Failure from './failure';
import Result from './result'

@injectable()
export default abstract class UseCase<T> {
    public abstract execute(...rest: any[]): Promise<Result<T | Failure>> | Result<T | Failure>;
}
