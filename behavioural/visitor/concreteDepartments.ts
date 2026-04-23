import type { IDepartment } from "./idepartment.js";
import type { IVisitor } from "./ivisitor.js";

export class SalesDept implements IDepartment {
    public quota: number = 50000;

    accept(visitor: IVisitor): void {
        visitor.visitSales(this);
    }
}

export class EngineeringDept implements IDepartment {
    public codeLines: number = 100000;

    accept(visitor: IVisitor): void {
        visitor.visitEngineering(this);
    }
}