import { EngineeringDept, SalesDept } from "./concreteDepartments.js";
import { AnnualReportVisitor, BonusCalculatorVisitor } from "./concreteVisitors.js";
import type { IDepartment } from "./idepartment.js";

const departments: IDepartment[] = [new SalesDept(), new EngineeringDept()];

const report = new AnnualReportVisitor();
const bonus = new BonusCalculatorVisitor();

// Run the report logic across all departments
departments.forEach(dept => dept.accept(report));

// Run the bonus logic across all departments
departments.forEach(dept => dept.accept(bonus));