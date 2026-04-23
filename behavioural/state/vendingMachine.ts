import { HasMoneyState, NoMoneyState } from "./concreteStates.js";
import type { IVendingState } from "./iVendingState.js";

export class VendingMachine {
    public noMoneyState: IVendingState; //Vending machine holds all these states as properties so it can switch between them.
    public hasMoneyState: IVendingState;

    private currentState: IVendingState;

    constructor() {
        this.noMoneyState = new NoMoneyState(this); //This constructor takes the vending machine itself as an argument so that the state can change the machine's state when actions are performed. For example, when money is inserted in the NoMoneyState, it can call machine.setState(machine.hasMoneyState) to transition to the HasMoneyState.
        this.hasMoneyState = new HasMoneyState(this);
        
        // Initial state
        this.currentState = this.noMoneyState;
    }

    public setState(state: IVendingState) {
        this.currentState = state;
    }

    public insertMoney() { this.currentState.insertMoney(); }
    public pressButton() { this.currentState.pressButton(); }
}