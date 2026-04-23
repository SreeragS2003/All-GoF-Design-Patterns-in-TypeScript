import { BeverageMaker } from "./template.js";

export class TeaMaker extends BeverageMaker { //Overriding the beveragemaker template methods to provide specific implementations for tea and coffee.
    protected brew(): void {
        console.log("Steeping the tea bag...");
    }

    protected addCondiments(): void {
        console.log("Adding lemon.");
    }
}

export class CoffeeMaker extends BeverageMaker {
    protected brew(): void {
        console.log("Dripping coffee through filter...");
    }

    protected addCondiments(): void {
        console.log("Adding sugar and milk.");
    }
}