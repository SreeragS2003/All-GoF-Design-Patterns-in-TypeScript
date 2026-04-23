import type { IPrototype } from "./iprototype.js";

export class Enemy implements IPrototype {
    public health: number;
    public weapon: string;
    public coordinates: number[];

    constructor(health: number, weapon: string, coordinates: number[]) {
        this.health = health;
        this.weapon = weapon;
        this.coordinates = coordinates;
        // Imagine heavy loading logic here...
    }

    // The Clone Method
    public clone(): this {
        // We create a new object using the existing values
        // Note: For arrays/objects, we use the spread operator [...] 
        // to ensure we aren't just copying a reference (Deep Copy).
        return new (this.constructor as any)(
            this.health,
            this.weapon,
            [...this.coordinates] //deep copy of the coordinates array
        );
    }
}