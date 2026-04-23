import type { EngineeringDept, SalesDept } from "./concreteDepartments.js";

export interface IVisitor {
    visitSales(sales: SalesDept): void;
    visitEngineering(eng: EngineeringDept): void;
}