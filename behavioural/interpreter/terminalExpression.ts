import type { IExpression } from "./iexpression.js";

export class NumberExpression implements IExpression {
    constructor(private value: number) {}

    interpret(): number {
        return this.value;
    }
}