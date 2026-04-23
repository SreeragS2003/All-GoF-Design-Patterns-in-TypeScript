import { PizzaDecorator } from "./baseDecorator.js";

export class CheeseDecorator extends PizzaDecorator {
    getDescription(): string {
        return `${this.pizza.getDescription()}, Extra Cheese`;
    }

    getCost(): number {
        return this.pizza.getCost() + 1.5;
    }
}

export class MushroomDecorator extends PizzaDecorator {
    getDescription(): string {
        return `${this.pizza.getDescription()}, Mushrooms`;
    }

    getCost(): number {
        return this.pizza.getCost() + 1;
    }
}