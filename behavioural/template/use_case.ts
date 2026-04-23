import { CoffeeMaker, TeaMaker } from "./concreteBeverages.js";

console.log("--- Making Tea ---");
const tea = new TeaMaker();
tea.makeBeverage();

console.log("\n--- Making Coffee ---");
const coffee = new CoffeeMaker();
coffee.makeBeverage();