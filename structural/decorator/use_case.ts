import { PlainPizza } from "./baseVersion.js";
import { CheeseDecorator, MushroomDecorator } from "./concreteDecorators.js";
import type { IPizza } from "./ipizza.js";

// 1. Start with a plain pizza
let myPizza: IPizza = new PlainPizza();

// 2. Wrap it in cheese
myPizza = new CheeseDecorator(myPizza);

// 3. Wrap it in mushrooms
myPizza = new MushroomDecorator(myPizza);

console.log(myPizza.getDescription()); // Plain Pizza, Extra Cheese, Mushrooms
console.log(myPizza.getCost());        // 7.5