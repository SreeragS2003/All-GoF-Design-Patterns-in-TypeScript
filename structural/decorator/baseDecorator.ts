import type { IPizza } from "./ipizza.js";

export abstract class PizzaDecorator implements IPizza {
    constructor(protected pizza: IPizza) {} //Instead of becoming a pizza (Inheritance), the decorator holds a pizza (Composition).
    //For the above line, TypeScript internally does:
    //protected pizza: IPizza; // 1. Declare the property
    // constructor(pizza: IPizza) { // 2. Accept the argument
    //     this.pizza = pizza;      // 3. Assign the value
    // }
    getDescription(): string {
        return this.pizza.getDescription(); //At this abstract level, the decorator doesn't add anything yet. It simply delegates the call down to the object it is holding.
    }

    getCost(): number {
        return this.pizza.getCost();
    }
}
//The concrete decorators will extend this base class and override the getDescription and getCost methods to add their specific behavior, while still calling the base implementation to maintain the existing functionality.