import type { IExpression } from "./iexpression.js";

//Basically contains the grammar rules
export class AddExpression implements IExpression {
    constructor(private left: IExpression, private right: IExpression) {}

    interpret(): number {
        return this.left.interpret() + this.right.interpret();
    }
}

export class SubtractExpression implements IExpression {
    constructor(private left: IExpression, private right: IExpression) {}

    interpret(): number {
        return this.left.interpret() - this.right.interpret();
    }
}