import { injectable } from "inversify";
import Calculation from "../domain/entities/calculation.entity";

@injectable()
export default class CalculationsRepository {
    public static Token: string = 'CALCULATIONS_REPOSITORY';

    public add(calculation: Calculation) {

    }

    public list(max: number) {
        
    }
}