//Actions that can be performed in any state of the vending machine. Each state will implement this interface and provide its own behavior for these actions. For example, in the "NoMoneyState", the insertMoney() method might transition the machine to the "HasMoneyState", while in the "HasMoneyState", the pressButton() method might dispense the item and transition back to "NoMoneyState".
export interface IVendingState {
    insertMoney(): void;
    pressButton(): void;
}