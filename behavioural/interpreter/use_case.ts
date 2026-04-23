import { AddExpression, SubtractExpression } from "./nonTerminalExpression.js";
import { NumberExpression } from "./terminalExpression.js";

// First, create the leaves (numbers)
const five = new NumberExpression(5);
const ten = new NumberExpression(10);
const two = new NumberExpression(2);

// Build the tree: (5 + 10)
const sum = new AddExpression(five, ten);

// Complete the tree: (sum) - 2
const root = new SubtractExpression(sum, two);

// Execute the interpretation
console.log(`Result: ${root.interpret()}`); // Output: Result: 13