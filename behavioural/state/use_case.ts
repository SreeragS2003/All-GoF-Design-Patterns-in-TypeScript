import { VendingMachine } from "./vendingMachine.js";

const machine = new VendingMachine();

machine.pressButton(); // Please insert money first.
machine.insertMoney(); // Money inserted.
machine.pressButton(); // Dispensing product...