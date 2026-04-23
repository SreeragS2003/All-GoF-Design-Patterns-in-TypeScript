import {Pizza} from "./pizza.js";

export class PizzaBuilder {
    private pizza: Pizza;

    constructor() {
        this.pizza = new Pizza();
    }

    setCrust(crust: string): PizzaBuilder {
        this.pizza.crust = crust;
        return this; // Allows chaining
    }

    setSauce(sauce: string): PizzaBuilder {
        this.pizza.sauce = sauce;
        return this; //Again allows chaining
    }

    addTopping(topping: string): PizzaBuilder {
        this.pizza.toppings.push(topping);
        return this; //Allows chaining
    }

    // The final step to get the finished product
    build(): Pizza {
        return this.pizza; //Final instance of Pizza is returned
    }
}