import type { EngineeringDept, SalesDept } from "./concreteDepartments.js";
import type { IVisitor } from "./ivisitor.js";

export class AnnualReportVisitor implements IVisitor {
    visitSales(sales: SalesDept) {
        console.log(`Report: Sales quota is ${sales.quota}`);
    }

    visitEngineering(eng: EngineeringDept) {
        console.log(`Report: Engineering has maintained ${eng.codeLines} lines of code.`);
    }
}

export class BonusCalculatorVisitor implements IVisitor {
    visitSales(sales: SalesDept) {
        console.log(`Bonus: Based on ${sales.quota} quota.`);
    }

    visitEngineering(eng: EngineeringDept) {
        console.log("Bonus: Based on project completion.");
    }
}