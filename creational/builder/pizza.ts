export class Pizza {
    public crust: string = "";
    public sauce: string = "";
    public toppings: string[] = []; //A pizza can have multiple toppings, so we use an array to store them.

    public describe(): void {
        console.log(`Pizza with ${this.crust} crust, ${this.sauce} sauce, and: ${this.toppings.join(", ")}`);
    }
}