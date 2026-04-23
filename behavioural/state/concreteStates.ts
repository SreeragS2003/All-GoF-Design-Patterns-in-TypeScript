import type { IVendingState } from "./iVendingState.js";
import type { VendingMachine } from "./vendingMachine.js";

//Each class handles the same methods differently.
export class NoMoneyState implements IVendingState {
    constructor(private machine: VendingMachine) {}

    insertMoney() {
        console.log("Money inserted.");
        this.machine.setState(this.machine.hasMoneyState);
    }
    pressButton() {
        console.log("Please insert money first.");
    }
}

export class HasMoneyState implements IVendingState {
    constructor(private machine: VendingMachine) {}

    insertMoney() {
        console.log("Money already inserted.");
    }
    pressButton() {
        console.log("Dispensing product...");
        this.machine.setState(this.machine.noMoneyState);
    }
}